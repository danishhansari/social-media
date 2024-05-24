import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";
const handleBookmark = (id) => {
  const token = Cookies.get("token");
  console.log(id);
  axios
    .post(
      `${import.meta.env.VITE_SERVER}/user/bookmark`,
      { tweetID: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(({ data }) => {
      toast.success(data.message);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { handleBookmark };
