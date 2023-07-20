const express = require('express');
const router = express.Router();

router.post('/login', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    res.send('User logged in successfully. User details:'+username+'/'+password+'/'+email);
})

module.exports = router;
