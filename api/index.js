import { config } from "dotenv";
import express from "express";
import dbConnection from "./database/dbConnection.js";

config({path: "./config/config.env"})
const app = express();

dbConnection();
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`server listening to PORT ${port}`)
})