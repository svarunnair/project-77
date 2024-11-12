const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: { type: String, required: true },
  name: { type: String, required: true, trim: true },
});


const userModal = mongoose.model('storage', userSchema)


module.exports = {userModal}