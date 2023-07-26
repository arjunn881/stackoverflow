import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js';
import answerRoutes from './routes/Answers.js';


const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
  res.send("This is Stackoverflow Clone API....");
});

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes)



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




// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import mongoose from "mongoose";
// // import userRoutes from "./routes/users.js";
// // import answerRoutes from "./routes/Answers.js";
// // import questionRoutes from "./routes/Questions.js";
//  import userRoutes from './routes/users.js'
//  import questionRoutes from './routes/Questions.js';

// const app = express();
// dotenv.config();

// app.use(express.json({ limit: "30mb", extended: true }));
// app.use(express.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("This is a stack overflow clone API");
// });

//  app.use("/user", userRoutes);
// // app.use("/answer", answerRoutes);
//  app.use("/questions", questionRoutes);

// const PORT = process.env.PORT || 5000;

// const DATABASE_URL = process.env.MONGO;

// mongoose.set("strictQuery", true);
// mongoose
//   .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () => {
//       console.log(`server running on port ${PORT}`);
//     })
//   )
//   .catch((err) => console.log(err.message));