const express = require('express')
const app = express()
const path = require('path')

// seting
app.set('port', 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

// routes
app.use(require('./routes/routes.js'))

// static files
app.use(express.static(path.join(__dirname, 'public')))

// listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})