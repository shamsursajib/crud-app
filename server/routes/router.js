const express = require ('express');
const route = express.Router();

route.get('/', (req, res) => {
    // res.send('root');
    res.render('index.ejs');
})

route.get('/add-user', (req, res) => {
    // res.send('root');
    res.render('add_user.ejs');
})

route.get('/update-user', (req, res) => {
    // res.send('root');
    res.render('update_user.ejs');
})

module.exports = route;