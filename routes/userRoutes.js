const express = require('express');
const userroute = express.Router();

userroute.post('/SaveUserInfo', async (req, res, next) => {
    //res.send("Hello");
    //console.log('SaveUserInfo req recieved.');
    const user = req.body.user;
    res.send('Saved username to database: ' +user);
    //res.sendStatus(200);
});
userroute.get('/SearchUserInfo', async (req, res, next) =>{
    const user = req.query.user;
    const email = req.query.email;
    //res.send("SearchUserInfo exit in database: "+user);
    //res.sendFile(__dirname+'/public/userdbdata.html');
    res.render(__dirname+'./../views/userdbdata.html', {"user":user, "email":email});
});

module.exports = userroute;