import { Router } from "express";
import { verifyToken } from "../middleware/auth.middleware.js";
import {
  getUser,
  getUserFriend,
  addRemoveFriend,
} from "../controller/user.controller.js";

const router = Router();

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriend);

// Update
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
