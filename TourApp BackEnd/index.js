//setting up Express Server
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";



//mongodb+srv://jrTours:<password>@cluster0.sne6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const app = express();

//morgan is middleware to log the http requests
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); // http://localhost:5000/users/signup

app.get("/", (req, res) => {
  res.send("Welcome to tour API");
});

const MONGODB_URL = "mongodb+srv://jrTours:Kurt0916@cluster0.sne6r.mongodb.net/tour_DB?retryWrites=true&w=majority"

const port = 4000;


mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));