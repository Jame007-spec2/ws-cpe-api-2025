const mongoose = require('mongoose');
require('dotenv').config();

const db_url = process.env.DB_URL

exports.connectDB = async () => {
    try {
        const connectOptions = {
            dbName: 'workshop_products_db'
        };
        await mongoose.connect(db_url,connectOptions);
        console.log('Connected to database succesfully');
    } catch (error) {
        console.log('Error connecting to database: ${error.message}');
    }
}