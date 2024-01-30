import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

// configure database
const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected successfully to database");
  } catch (error) {
    console.log(error);
  }
};



export default dbConnect;
