import Tweet from "../models/tweet.model.js";
import { z } from "zod";

const tweetSchema = z.string().min(1).max(256).trim();
const postTweet = async (req, res) => {
  const userID = req.userId;
  const { tweet } = req.body;

  try {
    tweetSchema.parse(tweet);
    const uploadedTweet = await Tweet.create({
      user: userID,
      tweet,
    });
    return res.status(201).json({ message: "Success", uploadedTweet });
  } catch (error) {
    return res.status(403).json(error.message);
  }
};

const getTweet = async (req, res) => {
  const tweets = await Tweet.find({})
    .sort({ createdAt: -1 })
    .populate("user", "-accessToken -password -location -website -bio -banner -dob -email -follower -following -googleAuth -post -createdAt -updatedAt")
    .limit(20)
    .lean();
  return res.status(200).json(tweets);
};

export { postTweet, getTweet };
