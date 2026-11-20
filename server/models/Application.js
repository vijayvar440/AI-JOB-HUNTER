const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    },
    status: {
        type: String,
        enum: [
            "Saved",
            "Applied",
            "Under Review",
            "Interview",
            "Rejected",
            "Selected"
        ],
        default: "Saved"
    },
    appliedAt: {
        type: Date,
        default: null
    },
    notes: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Application", applicationSchema);