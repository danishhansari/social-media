import User from "../models/user.model.js";

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getUserFriend = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    return res.status(200).json(formattedFriends);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendsId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendsId);
    if (user.fridends.includes(friendsId)) {
      user.friends = user.friends.filter((id) => id !== friendsId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendsId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    return res.status(200).json(formattedFriends);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

export { getUser, getUserFriend, addRemoveFriend };
