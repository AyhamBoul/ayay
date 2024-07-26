const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 8 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  active: { type: Boolean, default: false },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
  marks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mark' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;