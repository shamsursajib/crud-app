const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
dotenv.config({ path: 'config.env' })
const path = require('path');

//log request

app.use(morgan('tiny'))

// parse request to bosy parser
app.use(bodyParser.urlencoded({ extended: true }))
// set view engine

app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))

//load asset

app.use('/css', express.static(path.resolve(__dirname, "asset/css")))
app.use('/img', express.static(path.resolve(__dirname, "asset/img")))
app.use('/js', express.static(path.resolve(__dirname, "asset/js")))
const PORT = process.env.Port || 8080
app.get('/', (req, res) => {
    // res.send('root');
    res.render('index.ejs');
})

app.listen(PORT, () => { console.log('Server is running on http://localhost:${PORT}') });

