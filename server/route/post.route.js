import { Router } from "express";
import { verifyToken } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/middleware.js";
import {
  createPost,
  getFeedPost,
  getUserPosts,
  likePost,
} from "../controller/post.controller.js";

const router = Router();

router.post("/", verifyToken, upload.single("picture"), createPost);
router.get("/", verifyToken, getFeedPost);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.patch("/:id/like", verifyToken, likePost);

export default router;
