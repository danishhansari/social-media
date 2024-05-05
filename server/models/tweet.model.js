import { model, Schema } from "mongoose";

const tweetSchema = new Schema(
  {
    owner: {
      _id: String,
      username: String,
      name: String,
      profilepic: String,
    },
    tweet: {
      type: String,
      maxLimit: [256, "You cannot sent more than 256 character tweet"],
      required: true,
    },
    replies: [],
    like: {
      type: Number,
      default: 0,
    },
    bookmark: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Tweet = model("Tweet", tweetSchema);
export default Tweet;
