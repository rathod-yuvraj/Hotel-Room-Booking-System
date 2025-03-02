/**
 * @name Hotel Room Booking System
 * @author Md.Yuvraj Rathod 
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Yuvraj Rathod
 * @copyright ©2025 ― Md. Yuvraj Rathod . All rights reserved.
 * @version v0.0.1
 *
 */

const router = require('express').Router();
const { getDashboardData } = require('../controllers/apps.controllers');
const { isAuthenticatedUser, isBlocked, isAdmin } = require('../middleware/app.authentication');

// get dashboard info by admin
router.route('/dashboard').get(isAuthenticatedUser, isBlocked, isAdmin, getDashboardData);

module.exports = router;
