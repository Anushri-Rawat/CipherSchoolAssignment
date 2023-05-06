const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const cloudinary = require("cloudinary");
require("dotenv").config();
const morgan = require("morgan");
const userRouter = require("./routes/userRoute");
const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/errorMiddleware");

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use("/api/users", userRouter);
app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
