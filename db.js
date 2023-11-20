// db.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let db;

const connectDB = async () => {
  if (client) return client;

  client = new MongoClient(uri, options);

  if (!client.isConnected()) await client.connect();
  db = client.db(process.env.MONGODB_DB);

  return db;
};

export { connectDB };
