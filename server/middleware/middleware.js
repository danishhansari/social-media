import { Router, json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const middleware = Router();
middleware.use(json());
middleware.use(cors());
middleware.use(cookieParser());

export default middleware;
