import express from "express";
import { config } from "dotenv";
import cors from "cors";
import weatherRouter from "./routes/weather.js";
import { errHandle } from "./middlewares/errHandle.js";

config();
const app=express();
app.use(express.json());
app.use(cors());
app.use("/api/weather",weatherRouter)
app.use(errHandle)// errhandle

let port= process.env.PORT || 3500;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
    
})