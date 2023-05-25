import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Jwt } from 'jsonwebtoken';

const app = express();



dotenv.config();

const connect = async () => {
  await mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};



app.use(express.json());

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something Went Wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8800, () => {
  connect();
  console.log("server connected");
});