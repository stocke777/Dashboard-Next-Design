// // userModel.js

// const { mongoose } = require('./../db'); // Import the mongoose connection

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User =  mongoose.models?.User || mongoose.model('User', userSchema);

// module.exports = User;
import { Schema, model, models } from 'mongoose';

const testSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = models.User || model('User', testSchema);

export default User;