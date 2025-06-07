const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { savePreferences, getPreferences } = require('../controllers/preferenceController');

const router = express.Router();

router.post('/preferences',authMiddleware, savePreferences);
router.get('/preferences',authMiddleware, getPreferences);

module.exports = router;