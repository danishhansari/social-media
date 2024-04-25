import { Router, json } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
const middleware = Router();
import { fileStorage } from "./fileStorage.middleware.js";
import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

middleware.use(json());
middleware.use(helmet());
middleware.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
middleware.use(morgan("common"));
middleware.use(bodyParser.json({ limit: "30mb", extended: true }));
middleware.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
middleware.use(cors());
middleware.use(
  "/assets",
  express.static(path.join(__dirname, "public/assets"))
);

export const upload = multer({ storage: fileStorage });
export default middleware;
