/**
 * @name Hotel Room Booking System
 * @author Md.Yuvraj Rathod 
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Yuvraj Rathod
 * @copyright ©2023 ― Md. Yuvraj Rathod . All rights reserved.
 * @version v0.0.1
 *
 */
"mongodb+srv://rajrathod9621:Jalna@21@cluster0.mkroh.mongodb.net/"

const mongoose = require('mongoose');
const { validateBookingDates } = require('../lib/booking.dates.validator');

const bookingSchema = new mongoose.Schema({
  room_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rooms',
    required: [true, 'Room id is required field']
  },
  booking_dates: {
    type: [Date],
    required: [true, 'Booking `booking_dates` is required field'],
    validate: [validateBookingDates, 'Please provide valid future dates for `booking_dates`']
  },
  booking_status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'cancel', 'approved', 'rejected', 'in-reviews', 'completed'],
    required: [true, 'Room status is required field.']
  },
  booking_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: [true, 'User id is required field']
  },
  reviews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reviews'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// updatedAt' field before saving or updating a document
bookingSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Bookings', bookingSchema);
