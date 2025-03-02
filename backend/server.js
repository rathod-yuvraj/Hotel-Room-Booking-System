/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

/*
 * Name: Hotel Room Booking System ~ Backed
 * Description: Build an Hotel Room Booking System using node.js, express.js application from the scratch
 * Author: Md. Samiur Rahman (Mukul)
 * Last Modified: 26/02/2023
 * Version: v0.0.1
 *
 */

// imports modules & dependencies
const app = require('./src/app');
const logger = require('./src/middleware/winston.logger');

// app listens to .env defined port
const PORT = process.env.APP_PORT || 5000; // Fallback to 5000 if not defined
const BASE_URL = process.env.APP_BASE_URL || `http://localhost:${PORT}`;

// app.listen(process.env.APP_PORT, () => {
//   logger.info(`App server running on: ${process.env.APP_BASE_URL}`);
// });
app.listen(PORT, () => {
  logger.info(`✅ App server running on: ${BASE_URL}`);
});