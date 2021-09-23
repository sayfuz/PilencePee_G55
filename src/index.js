const express = require('express');
const morgan = require('morgan');
const servicesRoute = require('../routes/services.routes');
const authRoute = require('../routes/auth.routes')
const usersRoute = require('../routes/users.routes')
const imageRoute = require('../routes/images.routes');

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
app.use('/api/auth/', authRoute);
app.use('/api/users/', usersRoute);
app.use('/api/services/images/', imageRoute);

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});