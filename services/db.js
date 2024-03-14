// Import dotenv to load environment variables from .env file
require('dotenv').config();

// Import mongoose
const mongoose = require('mongoose');

// Get the database connection string from environment variables
const DATABASE = process.env.DATABASE;

// Connection string
mongoose.connect(DATABASE);

// Model Creation
const contactSchema = new mongoose.Schema({
    id: Number,
    name: { firstname: String, lastname: String },
    email: String,
    phone: String,
    address: { city: String, street: String, zipcode: String },
});

const contact = mongoose.model('contacts', contactSchema);

module.exports = {
    contact
};