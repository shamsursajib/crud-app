const req = require('express/lib/request');
var Userdb = require('../model/model');

//create & save new user

exports.create = (req, res) => {
    //validate a request 
    if (!req.body) {
        res.status(400).send({ message: "Content Cannot Be empty" });
        return;
    }
    //new user 
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //save user in db

    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occoured"
            });
        });


}





//retive & retuen user / sinle user 


exports.find = (req, res) => {
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error  Occured" })
        })


}


// update a new identied user by user id 

exports.update = (req, res) => {
    if (req.body) {
        return res.status(400)
            .send({ message: " Data Cannot be empty" })
    }
    const id = req.param.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update user with ${id}. Maybe user Not found` })
            } else {
                res.send(data)
            }
        })

        .catch(err => {
            res.status(500).send({ message: " Error Update user Information" })
        })

}


// delete a new identied user by user id 

exports.delete = (req, res) => {

}