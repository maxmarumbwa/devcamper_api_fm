const ErrorResponse = require('./utils/errorResponse');
const asynchandler = require('./middleware/async');
const User = require('./models/User');

// @desc    Register user
// @route    GET /api/v1/auth/register
// @access    Public
exports.register = asynchandler(async (req, res, next) => {
res.status(200).json({ succes: true});
});