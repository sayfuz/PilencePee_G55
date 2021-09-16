const express = require('express');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');

const { database } = require('./keys');

// Initializations
const app = express();
const path = require('path');
require('./lib/passport');

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(session({
    secret: 'mysqlnodesession',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Global Variables
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.success = req.flash('message');
    app.locals.user = req.user;
    next();
});

// Routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('services', require('./routes/services'));

// Public - Static files
app.use(express.static(path.join(__dirname, 'public')));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});