// db.js

// const mongoose = require('mongoose');

// const MONGODB_URI = 'mongodb://deshwaljaivardhan:31joGMcUsrskkcWq@localhost:27017/Dashboard';

// async function connectToDatabase() {
//   try {
//     await mongoose.connect('mongodb://deshwaljaivardhan:31joGMcUsrskkcWq@localhost:27017/Test?retryWrites=true&w=majority', {});

//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// module.exports = { mongoose, connectToDatabase };
import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(process.env.MONGODB_URI);

export const disconnectMongo = async () => {
	await mongoose
		.disconnect()
		.then(() => {
			console.log("Disconnected from MongoDB");
		})
		.catch((disconnectErr) => {
			console.error("Error disconnecting from MongoDB:", disconnectErr);
		});
};

export default connectMongo;
