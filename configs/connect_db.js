const mongoose = require('mongoose');
require('dotenv').config();

const db_url = 'mongodb://mongo:SkQOgQAGnWhjDulqzIkQLVvBeVtgPoKC@ballast.proxy.rlwy.net:40983';

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
