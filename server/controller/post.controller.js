import Post from "../models/post.model.js";
import User from "../models/user.model.js";

const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userProfilePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();
    const post = await Post.find();

    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
    return res.status(409).json({ error: error.message });
  }
};

const getFeedPost = async (req, res) => {
  try {
    const post = await Post.find();
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(409).json({ error: error.message });
  }
};

const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = Post.find({ userId });
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: error.message });
  }
};

const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        likes: post.likes,
      },
      { new: true }
    );
    return res.status(201).json(updatedPost);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: error.message });
  }
};

export { createPost, getFeedPost, getUserPosts, likePost };
