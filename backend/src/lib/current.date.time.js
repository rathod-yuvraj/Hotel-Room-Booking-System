/**
 * @name Hotel Room Booking System
 * @author Md.Yuvraj Rathod 
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Yuvraj Rathod
 * @copyright ©2025 ― Md. Yuvraj Rathod . All rights reserved.
 * @version v0.0.1
 *
 */

/**
 * function to generate current data and time
 * @returns current data and time
 */
const currentDateTime = () => {
  const date = new Date();
  const currentDataTime = date.toLocaleString([], { hour12: true });

  return currentDataTime;
};

module.exports = currentDateTime;
