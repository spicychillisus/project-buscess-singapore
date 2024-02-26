
const model = require('../models/userModel');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const uuidv4 = require('uuid')

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

module.exports.createNormalUser = (req, res, next) => {
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
            next();
        }
    })


}

// allows users of any kind to edit their own information
module.exports.editUser = (req, res) => {
    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
}

module.exports.forgetPassword = (req, res) => {
    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password // this piece of data is very important
    }

    const user = req.body.username;
    const userEmail = req.body.email;
    const resetToken = uuidv4();

    if (userEmail == undefined) {
        res.status(400).json({
            message: "Please fill in the email field"
        })
    };

    const resetPassword = (userEmail, resetToken) => {
        // create a nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'haerinkang475@gmail.com',
                pass: 'SMB3333M',
            },
        });

        const mailOptions = {
            from: 'haerinkang475@gmail.com',
            to: userEmail,
            subject: 'Password Reset',
            // content in the email
            text: `
            Hi ${user}!
            You are receiving this email because you (or someone else) have requested the reset of the password for your account.
            If you didn't request this, please ignore this email and your password will remain unchanged.
            Click the following link to reset your password: http://example.com/reset-password?token=${resetToken}
            `,
          };

        return transporter.sendMail(mailOptions)
    }

    resetPassword(userEmail, resetToken)
        .then(() => {
            res.status(200).json({
                message: "We have sent a link to your email to reset your password. Please check your email and follow the instructions."
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "Error sending email"
            })
            console.error(err);
        })

    



}

