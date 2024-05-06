import axios from "axios";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const HomePageRightSection = () => {
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]);
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
              <Link
                key={user._id}
                to={`/${user.username}`}
                className="hover:bg-lightgrey px-4 py-2"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user.profile_img}
                    alt={user.name}
                  />
                  <div>
                    <p className="text-black font-semibold">{user.name}</p>
                    <p className="text-darkgrey">@{user.username}</p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="text-[14px] text-center py-4">
            Try to searching for people, lists or keywords
          </p>
        )}
      </div>

      <div className="bg-white border-black border">
        <h1 className="text-2xl font-bold">Who to Follow</h1>
      </div>
    </div>
  );
};

export default HomePageRightSection;
