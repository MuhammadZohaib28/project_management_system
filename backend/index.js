import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(morgan("dev"));

//db connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(`Failed to connect to DB, Error: ${err}`));

app.use(express.json());

const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

//Error Middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    message: "Internel Server Error",
  });
});

//Not found middleware
app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
