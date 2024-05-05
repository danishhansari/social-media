import { Schema, model } from "mongoose";

const profile_imgs_name_list = [
  "Garfield",
  "Tinkerbell",
  "Annie",
  "Loki",
  "Cleo",
  "Angel",
  "Bob",
  "Mia",
  "Coco",
  "Gracie",
  "Bear",
  "Bella",
  "Abby",
  "Harley",
  "Cali",
  "Leo",
  "Luna",
  "Jack",
  "Felix",
  "Kiki",
];
const profile_imgs_collections_list = [
  "notionists-neutral",
  "adventurer-neutral",
  "fun-emoji",
];

const bannerUrl =
  "https://t4.ftcdn.net/jpg/04/54/94/75/240_F_454947598_0nkz5zWHSLuqIBGfEEcIJJX1VTnxdziu.jpg";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    profile_img: {
      type: String,
      default: () => {
        return `https://api.dicebear.com/6.x/${
          profile_imgs_collections_list[
            Math.floor(Math.random() * profile_imgs_collections_list.length)
          ]
        }/svg?seed=${
          profile_imgs_name_list[
            Math.floor(Math.random() * profile_imgs_name_list.length)
          ]
        }`;
      },
    },
    banner: {
      type: String,
      default: bannerUrl,
    },
    dob: {
      type: Date,
    },
    password: {
      type: String,
    },
    bio: {
      type: String,
      maxLength: [200, "Bio should not be more than 200"],
      default: "",
    },
    googleAuth: {
      type: Boolean,
      default: false,
    },
    location: String,
    website: String,
    accessToken: String,
    following: [],
    follower: [],
    post: [],
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
