
const Resume = require("../models/Resume");
const pdf = require("pdf-parse");
const { parseResume } = require("../services/resumeParser");

const uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload a PDF resume"
            });
        }

        // Extract PDF text
        const pdfData = await pdf(req.file.buffer);
        const extractedText = pdfData.text;

        if (!extractedText.trim()) {
            return res.status(400).json({
                success: false,
                message: "Could not extract text from this PDF"
            });
        }

        // Free JavaScript resume analysis
        const analysis = parseResume(extractedText);

        // Save resume and analysis
        const resume = await Resume.create({
            user: req.user.id,
            fileName: req.file.originalname,
            fileUrl: "memory-upload",
            extractedText,
            skills: analysis.skills,
            education: analysis.education,
            experience: analysis.experience,
            isPrimary: true
        });

        return res.status(201).json({
            success: true,
            message: "Resume uploaded and analyzed successfully",
            resume: {
                id: resume._id,
                fileName: resume.fileName,
                skills: resume.skills,
                education: resume.education,
                experience: resume.experience
            }
        });

    } catch (error) {
        console.error("Resume Upload Error:", error);

        return res.status(500).json({
            success: false,
            message: "Resume upload failed"
        });
    }
};

module.exports = { uploadResume };
