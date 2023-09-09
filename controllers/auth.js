const Signup = require('../models/signup');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await Signup.findOne({ email: email });
    if (user) {
      res.json({ success: false, msg: 'Email is already registered!' });
    } else {
      await Signup.create({ name, email, password: password });
      res.status(201).json({ success: true, msg: 'Account is successfully created!' })
    }
  } catch (e) {
    console.log(e.message);
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Signup.findOne({ email: email });
    if (!user) res.json({ success: false, msg: "User does not exist!" });
    else if (user.password === password) res.status(200).json({ success: true, user });
    else res.json({ success: false, msg: 'Password is incorrect!' });
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = { signup, login };
