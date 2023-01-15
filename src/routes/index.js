const {Router} = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_51MKJ3fHxSmEScnz41tjY766Edy1NAL85F3yo3HsalgxumWSxPRngva4Tpl0TeNQtYSTTAR3jcr6EuavE8gdHukdb00r3uO16oo');

router.get('/', (req, res) => {
    res.render('index')
});

// router.post('/checkout', async(req, res)=> {
//     console.log(req.body);
// //     const customer = await stripe.customers.create({
// //         email: req.body.stripeEmail,
// //         source: req.body.stripeToken
// //     });
// //    const charge = await stripe.charges.create({
// //         amount: '20000',
// //         currency: 'usd',
// //         customer: customer.id
// //     });

//     res.send('recivid');
// });


router.post('/checkout', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1MQPoTHxSmEScnz4z7173H2q',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://projectcor.com/es/thank-you-page-live-demo/',
      cancel_url: 'https://iconos8.es/illustrations/illustration/urban-credit-card',
    });
  
    res.redirect(303, session.url);
  });

module.exports = router;