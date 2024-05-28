import Tweet from "../models/tweet.model.js";
import Bookmark from "../models/bookmark.model.js";
import User from "../models/user.model.js";
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
    await User.findOneAndUpdate(
      ({ _id: userID },
      {
        $push: { post: uploadedTweet._id },
      })
    );

    const postedTweet = await uploadedTweet.populate(
      "user",
      "-accessToken -password -location -website -bio -banner -dob -email -follower -following -googleAuth -post -createdAt -updatedAt"
    );
    return res.status(201).json({ message: "Success", postedTweet });
  } catch (error) {
    return res.status(403).json(error.message);
  }
};

const getTweet = async (req, res) => {
  const tweets = await Tweet.find({})
    .populate(
      "user",
      "-accessToken -password -location -website -bio -banner -dob -email -follower -following -googleAuth -post -createdAt -updatedAt"
    )
    .limit(20)
    .sort({ createdAt: -1 })
    .lean();
  return res.status(200).json(tweets);
};

const bookmarkTweet = async (req, res) => {
  const { userId } = req;
  const { tweetID } = req.body;

  console.log("this is tweet id", tweetID);

  const tweet = await Tweet.findById(tweetID);
  console.log(tweet);
  try {
    const existingBookmark = await Bookmark.findOne({
      user: userId,
      tweet: tweetID,
    });
    if (!existingBookmark) {
      await Bookmark.create({
        user: userId,
        tweet: tweetID,
      });
      await Tweet.findByIdAndUpdate(tweetID, {
        $inc: { bookmark: 1 },
      });
      return res.status(200).json({ message: "Bookmark added" });
    }
    await Bookmark.findOneAndDelete({ user: userId, tweet: tweetID });
    await Tweet.findByIdAndUpdate(tweetID, {
      $inc: { bookmark: -1 },
    });
    return res.status(200).json({ message: "Bookmark Removed" });
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const getBookmark = async (req, res) => {
  const userId = req.userId;
  console.log(userId);
  const userBookmark = await Bookmark.find({ user: userId })
    .populate({
      path: "tweet",
      populate: {
        path: "user",
        select:
          "-password -accessToken -location -bio -banner -dob -following -follower -googleAuth -website -createdAt -updatedAt -email -post",
      },
    })
    .select("-user -_id")
    .lean();
  return res.status(200).json(userBookmark);
};

const deleteTweet = async (req, res) => {
  const { id } = req.body;

  try {
    await Tweet.findByIdAndDelete(id);
    return res.status(200).json({ message: "Tweet deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { postTweet, getTweet, getBookmark, bookmarkTweet, deleteTweet };
