import express from "express"
import {protectRoute} from "../middleware/auth.js";
import { swipeLeft , getMatches , getUserProfiles , swipeRight } from "../config/matchController.js";

const router = express.Router();

router.post("/swipe-right/:likedUserId", protectRoute , swipeRight)
router.post("/swipe-left/:dislikedUserId", protectRoute , swipeLeft)

router.get("/", protectRoute, getMatches);

router.get("/user-profiles", protectRoute, getMatches, getUserProfiles);
export default router;
