const mongoose = require("mongoose")

const patientSchema = new mongoose.schema({
    patientID: String,
    Surname: String,
    otherName: String,
    phoneNumber: String,
    residentialAddress: String,
    emergencyContact: {
        contactName: String,
        relationship: String
    }
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;