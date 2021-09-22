const express = require('express');
const morgan = require('morgan');
const servicesRoute = require('../routes/services');
const usersRoute = require('../routes/user')
const imageRoute = require('../routes/images');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/services/images/uploads', express.static('uploads'))

// Routes
app.use('/api/services/', servicesRoute);
app.use('/api/user/', usersRoute);
app.use('/api/services/images/', imageRoute);

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});