import { Schema, model } from "mongoose";

const bookmarkSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tweet: {
    type: Schema.Types.ObjectId,
    ref: "Tweet",
    required: true,
  },
});

const Bookmark = model("Bookmark", bookmarkSchema);

export default Bookmark;
