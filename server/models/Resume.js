const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    fileUrl: {
        type: String,
        required: true
    },
    extractedText: {
        type: String,
        default: ""
    },
    skills: {
        type: [String],
        default: []
    },
    experience: {
        type: [String],
        default: []
    },
    education: {
        type: [String],
        default: []
    },
    isPrimary: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Resume", resumeSchema);