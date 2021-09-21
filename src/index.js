const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const servicesRoute = require('../routes/services');
const usersRoute = require('../routes/user')

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/services/', servicesRoute);
app.use('/api/user/', usersRoute);

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});