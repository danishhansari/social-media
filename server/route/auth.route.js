import { Router } from "express";
import { loginUser, registerUser } from "../controller/auth.controller.js";
import { upload } from "../middleware/middleware.js";

const router = Router();

router.post("/register", upload.single("picture"), registerUser);
router.post("/login", loginUser);

export default router;
