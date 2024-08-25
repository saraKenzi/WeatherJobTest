import express from "express";
import { getWeatherByLocation } from "../controller/weather.js";

const weatherRouter=express.Router();
weatherRouter.get('/',getWeatherByLocation);     

export default weatherRouter;