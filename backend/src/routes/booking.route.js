/**
 * @name Hotel Room Booking System
 * @author Md.Yuvraj Rathod 
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Yuvraj Rathod
 * @copyright ©2025 ― Md. Yuvraj Rathod . All rights reserved.
 * @version v0.0.1
 *
 */

const router = require('express').Router();
const { isAuthenticatedUser, isBlocked, isAdmin } = require('../middleware/app.authentication');
const {
  placedBookingOrder, getBookingOrderByUserId, cancelSelfBookingOrder, getBookingOrderForAdmin, updatedBookingOrderByAdmin
} = require('../controllers/booking.controllers');

// route for placed a room booking order
router.route('/placed-booking-order/:id').post(isAuthenticatedUser, isBlocked, placedBookingOrder);

// routes for a user get bookings list and cancel booking order
router.route('/get-user-booking-orders').get(isAuthenticatedUser, isBlocked, getBookingOrderByUserId);
router.route('/cancel-booking-order/:id').put(isAuthenticatedUser, isBlocked, cancelSelfBookingOrder);

// routes for admin get all bookings list, rejected, approved and checkout placed order
router.route('/get-all-booking-orders').get(isAuthenticatedUser, isBlocked, isAdmin, getBookingOrderForAdmin);
router.route('/updated-booking-order/:id').put(isAuthenticatedUser, isBlocked, isAdmin, updatedBookingOrderByAdmin);

module.exports = router;
