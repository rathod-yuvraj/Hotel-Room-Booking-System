/**
 * @name Hotel Room Booking System
 * @author Md.Yuvraj Rathod 
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Yuvraj Rathod
 * @copyright ©2023 ― Md. Yuvraj Rathod . All rights reserved.
 * @version v0.0.1
 *
 */

const mongoose = require('mongoose');
const logger = require('../middleware/winston.logger');

// const connectionString = process.env.MONGO_URI;
const connectionString='mongodb+srv://rajrathod9621:Jalna%4021@cluster0.mkroh.mongodb.net/hotel_booking?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);

const connectDatabase = async () => {
  try {
    await mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true, // for mongoose 6.x
        // useFindAndModify: false, // for mongoose 6.x
      })
      .then(() => {
        logger.info('Connection establish to MongoDB database successful!');
      })
      .catch((error) => {
        logger.error('Error connecting to MongoDB: ', error);
      });
  } catch (error) {
    logger.error('Database connection error: ', error);
  }
};

module.exports = connectDatabase;
