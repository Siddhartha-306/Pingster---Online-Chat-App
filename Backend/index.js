import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user.route.js";

const app = express();


dotenv.config();

//middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4002;
const uri = process.env.MONGODB_URI;


// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB:", error));

app.use("/user", userRoute);


app.listen(port, () => {
    console.log(`App is running at port ${port}`);
});