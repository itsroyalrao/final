const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  userID: {
    type: mongoose.SchemaTypes.ObjectId,
  },
});

module.exports = mongoose.model('Expense', expenseSchema);