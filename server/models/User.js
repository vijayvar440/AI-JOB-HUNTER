
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    phone: {
        type: String,
        default: ""
    },

    location: {
        type: String,
        default: "Bhopal"
    },

    preferredRoles: {
        type: [String],
        default: ["Backend Developer"]
    },

    preferredLocations: {
        type: [String],
        default: ["Bhopal", "Remote"]
    },

    skills: {
        type: [String],
        default: [
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "SQL"
        ]
    },

    experienceLevel: {
        type: String,
        default: "Entry-level"
    },

    employmentType: {
        type: String,
        default: "Full-time"
    },

    autoApplyEnabled: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);