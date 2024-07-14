import { config } from "dotenv";
import express from "express";
import dbConnection from "./database/dbConnection.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";

config({ path: "./config/config.env" });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use("/api", userRoute);
app.use("/api/auth", authRoute);

// Error Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

dbConnection();
app.listen(port, () => {
  console.log(`server listening to PORT ${port}`);
});
