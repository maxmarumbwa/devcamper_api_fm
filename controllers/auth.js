const ErrorResponse = require('../utils/errorResponse');
const asynchandler = require('../middleware/async');
const User = require('../models/User');

// @desc    Register user
// @route    GET /api/v1/auth/register
// @access    Public
exports.register = asynchandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

// Create token
const token = user.getSignedJwtToken();

    res.status(200).json({ succes: true, token});
});