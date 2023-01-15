const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');
//const stripe = require('stripe')('sk_test_51MKJ3fHxSmEScnz41tjY766Edy1NAL85F3yo3HsalgxumWSxPRngva4Tpl0TeNQtYSTTAR3jcr6EuavE8gdHukdb00r3uO16oo');

const app = express();

// const YOUR_DOMAIN = 'http://localhost:3000';

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: '{{PRICE_ID}}',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/success.html`,
//     cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//   });

//   res.redirect(303, session.url);
// });


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