// Import mongoose package
const mongoose = require("mongoose");

// Create a Schema
// A Schema defines the structure of each document inside the collection.
const userSchema = new mongoose.Schema({

    // User's First Name
    first_name: {
        type: String,      // Data type should be String
        required: true,    // This field is mandatory
    },

    // User's Last Name
    last_name: {
        type: String,
    },

    // User's Email
    email: {
        type: String,
        required: true,    // Email is compulsory
        unique: true,      // No two users can have the same email
    },

    // User's Gender
    gender: {
        type: String,
    },

    // User's Job Title
    job_title: {
        type: String,
    },
});

// Create a Model using the Schema
// "User" becomes the Model name.
// MongoDB will automatically create a collection named "users".
const User = mongoose.model("User", userSchema);

// Export the Model so it can be used in other files
module.exports = User;
