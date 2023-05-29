const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendEmail = require("../utils/sendEmail");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Tourist Guider",
    },
  });
const user= await User.findOne({email:req.user.email})

const message="your payment successfull "

  await sendEmail({
    email: user.email,
    subject: `Confirmed Booking`,
    message,
  });
  // res
  //   .status(200)
  //   .json({ success: true, });
  res.status(200).json({
    success: true,
    message: `Email sent to ${user.email} successfully`,
    client_secret: myPayment.client_secret 
  });


});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});


