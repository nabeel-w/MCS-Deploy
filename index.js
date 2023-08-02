import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.js";
import taskRoute from "./routes/manage.js";
const path = require("path");

dotenv.config();
const app=express();
const PORT=process.env.PORT||5000;
const mongoLink=process.env.LINK||"mongodb://127.0.0.1:27017/taskDB";



//app.use(cors( {origin: ['http://localhost:5173']}));

mongoose.connect(mongoLink, {useNewUrlParser: true});

app.use("/api/auth",authRoute);
app.use("/api/task",taskRoute);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
  });

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
});