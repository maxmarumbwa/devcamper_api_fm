const express = require('express');
const dotenv = require('dotenv');
// Route files
const bootcamps = require('./routes/bootcamps');
    
// Load environment variables
dotenv.config({ path: './config/config.env' });

const app = express();

const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  next();
};

app.use(logger);


//mount routers
app.use('/api/v1/bootcamps', bootcamps);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
