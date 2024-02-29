
const model = require('../models/userModel');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const uuidv4 = require('uuid')

// will be implemented when the website is ready and is hosted
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
                user: 'tehpengbot@gmail.com',
                pass: 'hannibot2004',
            },
        });

        const mailOptions = {
            from: 'tehpengbot@gmail.com',
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

// all user allowed functions

module.exports.createUser = (req, res) => {
    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    if (req.body.username == undefined || req.body.email == undefined || req.body.password == undefined) {
        res.status(400).json({
            message: "Please fill in all fields"
        })
    }

    const callback = (err, result) => {
        if (err) {
            res.status(500).json({
                message: "Error creating user"
            })
            console.error(err);
        } else {
            res.status(200).json({
                message: "User created"
            })
        }
    }

    model.createUser(data, callback);
}

module.exports.editUsername = (req, res) => {
    const data = {
        username: req.body.username
    }

    if (req.body.username == undefined) {
        res.status(400).json({
            message: "Please enter a new username"
        })
    }
}