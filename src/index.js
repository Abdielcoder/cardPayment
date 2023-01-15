const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');

const app = express();


//Settings engine layout
app.set('views',path.join(__dirname,'views'))//set views folder
app.engine('.hbs', expbhs.engine({
    //Set layOuts
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'

}));
app.set('view engine', '.hbs');
//Routes
app.use(require('./routes/index'));
//Static
app.use(express.static(path.join(__dirname, 'public')));

//Middleware for enpoints
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(3000,() => {
    console.log('Server running on port 3000');
})