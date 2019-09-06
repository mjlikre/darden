

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = {
    bookingPayment : async (req, res)=>{
        const { payment, token } = req.body
        try {

            let status = await stripe.charges.create(
                {
                    amount: payment.total*100,
                    currency: "usd",
                    source: token.id,
                    receipt_email: token.email,
                    description: `Purchase for ${payment.hours} hours of ${payment.productName} services`,

                }

            )
            await res.json({status});
        } catch (err) {
            await res.json(err)
        }

}
}