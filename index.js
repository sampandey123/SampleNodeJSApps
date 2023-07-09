const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static(__dirname+'/public'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.listen(PORT, () => {
    console.log("Server listening at port: "+PORT)
});

app.get('/', (req, res) => {
    // res.sendStatus(404);
    // res.send('Hello');
    res.sendFile(__dirname+'/public/index.html');
});
app.post('/SaveUserInfo', async (req, res) => {
    //res.send("Hello");
    //console.log('SaveUserInfo req recieved.');
    const user = req.body.user;
    res.send('Saved username to database: ' +user);
    //res.sendStatus(200);
});
app.get('/SearchUserInfo', async (req, res) =>{
    const user = req.query.user;
    const email = req.query.email;
    //res.send("SearchUserInfo exit in database: "+user);
    //res.sendFile(__dirname+'/public/userdbdata.html');
    res.render(__dirname+'/views/userdbdata.html', {"user":user, "email":email});
});
