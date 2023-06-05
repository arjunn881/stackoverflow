import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js';
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
  res.send("This is Stackoverflow Clone API....");
});

app.use('/user', userRoutes);
app.use('/questtions', questionRoutes);



const PORT = process.env.PORT || 5000;

const connect = async () => {
  await mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      
      console.log(err.message)
    });
};

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something Went Wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(PORT, () => {
  connect();
  console.log(`server running on ${PORT}`);
});
