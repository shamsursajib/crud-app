const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
dotenv.config({ path: 'config.env' })
const path = require('path');

const connectDB = require('./server/database/connection')

//log request

app.use(morgan('tiny'))

// mongo db conenction
connectDB();

// parse request to bosy parser
app.use(bodyParser.urlencoded({ extended: true }))
// set view engine

app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))

//load asset

app.use('/css', express.static(path.resolve(__dirname, "asset/css")))
app.use('/img', express.static(path.resolve(__dirname, "asset/img")))
app.use('/js', express.static(path.resolve(__dirname, "asset/js")))


app.use('/', require('./server/routes/router'));
const PORT = process.env.Port || 8080


app.listen(PORT, () => { console.log('Server is running on http://localhost:${PORT}') });

