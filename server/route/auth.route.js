import { Router } from "express";
import { registerUser } from "../controller/auth.controller.js";
import { upload } from "../middleware/middleware.js";

const router = Router();

router.post("/register", upload.single("picture"), registerUser);

export default router;
