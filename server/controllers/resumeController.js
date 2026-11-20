
const Resume = require("../models/Resume");
const pdf = require("pdf-parse");

const uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload a PDF resume"
            });
        }

        const pdfData = await pdf(req.file.buffer);

        const extractedText = pdfData.text;

        if (!extractedText.trim()) {
            return res.status(400).json({
                success: false,
                message: "Could not extract text from this PDF"
            });
        }

        const resume = await Resume.create({
            user: req.user.id,
            fileName: req.file.originalname,
            fileUrl: "memory-upload",
            extractedText,
            isPrimary: true
        });

        res.status(201).json({
            success: true,
            message: "Resume uploaded successfully",
            resume: {
                id: resume._id,
                fileName: resume.fileName,
                extractedText
            }
        });

    } catch (error) {
        console.error("Resume Upload Error:", error);

        res.status(500).json({
            success: false,
            message: "Resume upload failed"
        });
    }
};

module.exports = { uploadResume };
