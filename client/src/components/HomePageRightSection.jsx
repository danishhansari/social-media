import axios from "axios";
import { lazy, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
const ProfileFlatCard = lazy(() => import("./ProfileFlatCard"));
import SmallLoader from "./SmallLoader";

const HomePageRightSection = () => {
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState([]);
  let interval;

  const searchUser = async (input) => {
    if (!input || input.length < 3) return;
    axios
      .post(`${import.meta.env.VITE_SERVER}/user/search`, { username: input })
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const handleInput = (e) => {
    clearTimeout(interval);
    setSearchInput(e.target.value);
    interval = setTimeout(() => {
      searchUser(e.target.value);
    }, 900);
  };

  return (
    <div className="px-8 py-2 w-2/3">
      <div className="relative">
        <input
          type="text"
          className="pl-10 py-3 w-full rounded-full group bg-lightgrey text-xl  border-primary focus:border-2 focus:outline-none"
          placeholder="Search"
          onChange={handleInput}
        />
        <IoIosSearch
          size={20}
          className="absolute top-1/2 left-3 text-grey -translate-y-1/2"
        />
      </div>

      <div className="bg-white border-lightgrey shadow-md border rounded-md text-black relative z-10 flex flex-col py-0 h-56 overflow-auto">
        {users.length > 0 ? (
          users.map((user) => {
            return (
              <ProfileFlatCard
                _id={user._id}
                key={user._id}
                username={user.username}
                profile_img={user.profile_img}
                name={user.name}
              />
            );
          })
        ) : (
          <p className="text-[14px] text-center py-4">
            Try to searching for people, lists or keywords
          </p>
        )}
      </div>

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
    </div>
  );
};

export default HomePageRightSection;
