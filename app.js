require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const authRoute = require('./routes/auth');
const expenseRoute = require('./routes/expense');
const paymentRoute = require('./routes/payment');
const resetpassword = require('./routes/resetPassword');

app.use(express.static("./public"));
app.use(express.json());

app.use('/auth', authRoute);
app.use('/expense', expenseRoute);
app.use('/payment', paymentRoute);
app.use('/password', resetpassword);

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT || 6644);
  } catch (e) {
    console.log(e.message);
  }
})()