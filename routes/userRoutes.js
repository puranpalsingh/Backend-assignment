const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getProfile, updateProfile, getDashboardSummary } = require('../controllers/userController');

const router = express.Router();

router.get('/profile',authMiddleware,getProfile);

router.patch('/profile', authMiddleware, updateProfile);

router.get('/dashboard-summary',authMiddleware, getDashboardSummary);


module.exports = router;