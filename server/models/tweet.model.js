import { model, Schema } from "mongoose";

const tweetSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tweet: {
      type: String,
      maxLimit: [256, "You cannot sent more than 256 character tweet"],
      required: true,
    },
    replies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
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
