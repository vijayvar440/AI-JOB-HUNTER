const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: "Remote"
    },
    jobType: {
        type: String,
        default: "Full-time"
    },
    experienceLevel: {
        type: String,
        default: "Entry-level"
    },
    description: {
        type: String,
        default: ""
    },
    skills: {
        type: [String],
        default: []
    },
    applyUrl: {
        type: String,
        required: true
    },
    source: {
        type: String,
        default: "Manual"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Job", jobSchema);