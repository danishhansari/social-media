import { Router, json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "compression";

const middleware = Router();
middleware.use(json());
middleware.use(cors());
middleware.use(cookieParser());
middleware.use(compression());

// Global catches route for finding potential error
middleware.use((err, req, res, next) => res.status(500).json(err.message));

export default middleware;
