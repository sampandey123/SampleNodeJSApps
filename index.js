const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes.js');
const login = require('./routes/login.js');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static(__dirname+'/public'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.use('/', userRoutes);
app.use('/', login);

app.listen(PORT, () => {
    console.log("Server listening at port: "+PORT)
});

app.get('/', (req, res) => {
    // res.sendStatus(404);
    // res.send('Hello');
    res.sendFile(__dirname+'/public/index.html');
    console.log(__dirname);
});




