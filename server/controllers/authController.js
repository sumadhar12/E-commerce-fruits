const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendWelcomeEmail = require("../emailService");

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Temporary in-memory store for OTPs (⚠️ Use Redis or DB in production)
const otpStore = {};

exports.signup = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role: role || 'user'
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
     console.error('Signup error:', err);
    res.status(500).json({ message: 'Signup error', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Login error', error: err.message });
  }
};

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await User.findOne({ email });
    if (!admin || admin.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Not an admin.' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: admin._id, role: admin.role }, JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({
      message: 'Admin login successful',
      token,
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Admin login error', error: err.message });
  }
};

// ✅ Send OTP to admin phone
exports.sendAdminOTP = async (req, res) => {
  try {
    const { phone } = req.body;

    const admin = await User.findOne({ phone });
    if (!admin || admin.role !== 'admin') {
      return res.status(403).json({ message: 'Phone not registered for admin' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    otpStore[phone] = otp;

    console.log(`OTP for ${phone}: ${otp}`); // In production, send via SMS gateway

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send OTP', error: err.message });
  }
};

// ✅ Verify Admin OTP
exports.verifyAdminOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (otpStore[phone] !== otp) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    const admin = await User.findOne({ phone });
    if (!admin || admin.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized access' });
    }

    const token = jwt.sign({ id: admin._id, role: admin.role }, JWT_SECRET, { expiresIn: '7d' });

    // OTP used, remove it
    delete otpStore[phone];

    res.status(200).json({
      message: 'OTP verified. Login successful.',
      token,
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'OTP verification failed', error: err.message });
  }
};
