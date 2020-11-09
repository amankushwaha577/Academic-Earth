const express = require('express');
const router = express.Router();

// import validators
const {
    userRegisterValidator,
    userLoginValidator,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../validators/auth');
const { runValidation } = require('../validators');

// import from controllers
const {
    register,
    registerActivate,
    login,
    requireSignin,
    forgotPassword,
    resetPassword
} = require('../controllers/auth');


// router.get('/secret', requireSignin, (req, res) => {
//     res.json({
//         data: 'This is secret page for logged in users only'
//     });
// });

module.exports = router;
