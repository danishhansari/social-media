import SmallLoader from "./loading/SmallLoader";
import { useEffect, useState } from "react";
import axios from "axios";
import ProfileFlatCard from "./ProfileFlatCard";

const WhoToFollow = () => {
  const [newUser, setNewUser] = useState([]);

  useEffect(() => {
    newUserProfile();
  }, []);
  const newUserProfile = async () => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/user/new-user-profile`)
      .then(({ data }) => {
        setNewUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-white border-lightgrey shadow-md border rounded-md text-black relative z-10 py-0 mt-8">
      <h1 className="text-2xl font-bold py-1 pl-4">Who to Follow</h1>
      <div className="h-56 overflow-auto flex flex-col">
        {newUser.length > 0 ? (
          newUser.map((user) => {
            return (
              <ProfileFlatCard
                _id={user._id}
                key={user._id}
                username={user.username}
                profile_img={user.profile_img}
                name={user.name}
                followBtn={true}
              />
            );
          })
        ) : (
          <SmallLoader className="self-center justify-self-center" />
        )}
      </div>
    </div>
  );
};

export default WhoToFollow;
