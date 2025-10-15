
const errorHandler = (err, req, res, next) => {
    // Log the error stack to the console for development
    console.log(err.stack.red);

    // Set the response status code, defaulting to 500 if err.statusCode is not present
    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Server Error',
    });
};

module.exports = errorHandler;