const express = require('express');
const router = express.Router();
const {
  signup,
  login,
  adminLogin,
  sendAdminOTP,
  verifyAdminOTP
} = require('../controllers/authController');

router.post('/signup', signup);


router.post('/login', login);

// ✅ Admin Login (Email & Password)
router.post('/admin/login', adminLogin);

// ✅ Send OTP to Admin's Phone
router.post('/admin/sendotp', sendAdminOTP);

// ✅ Verify Admin OTP
router.post('/admin/verifyotp', verifyAdminOTP);

module.exports = router;
