
const model = require('../models/userModel');

// generating the user code for administrative uses
module.exports.generateUserCode = (req, res, next) => {
    var code = Math.floor(Math.random() * 10000);
    code = res.locals.code;
    res.status(200).json({
        code: code
    });
    next();
}

/* 
creating user
there are two types of users: admin and user
there is a third one: dev, but it's a special one that is only given to the developer himself, or if he wants to give it to someone else
 */

module.exports.createNormalUser = (req, res) => {
    const data = {
        user_code: res.locals.code,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: "user",
        points: 0,
        rank: "newcomer"
    }

    if (req.body.username == undefined || req.body.email == undefined || req.body.password == undefined) {
        res.status(400).json({
            message: "Please fill in all the fields"
        })
    }

    model.createUser(data, (err, result) => {
        if (err) {
            res.status(500).json({
                message: "Error creating user"
            })
            console.error(err);
        } else {
            res.status(200).json({
                message: "User created successfully"
            })
        }
    })


}

module.exports.createAdministrator = (req, res) => {
    const data = {
        user_code: res.locals.code,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: "admin",
        points: 999999,
        rank: "forum grandmaster"
    }

    if (req.body.username == undefined || req.body.email == undefined || req.body.password == undefined) {
        res.status(400).json({
            message: "Please fill in all the fields"
        })
    }

    model.createUser(data, (err, result) => {
        if (err) {
            res.status(500).json({
                message: "Error creating user"
            })
            console.error(err);
        } else {
            res.status(200).json({
                message: "User created successfully"
            })
        }
    })


}