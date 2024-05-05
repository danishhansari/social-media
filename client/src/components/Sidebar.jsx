import { GoHome } from "react-icons/go";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { RiOpenaiFill } from "react-icons/ri";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaXTwitter, FaRegUser } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { currentUserAtom } from "../states/atom";

const routes = [
  { icon: <GoHome size={30} />, name: "Home", route: "/" },
  { icon: <IoSearchOutline size={30} />, name: "Explore", route: "/explore" },
  {
    icon: <IoNotificationsOutline size={30} />,
    name: "Notifications",
    route: "/notification",
  },
  { icon: <AiOutlineMessage size={30} />, name: "Message", route: "/message" },
  { icon: <RiOpenaiFill size={30} />, name: "Grok", route: "/grok" },
  {
    icon: <MdOutlineBookmarkBorder size={30} />,
    name: "Bookmark",
    route: "/bookmark",
  },
  { icon: <FaXTwitter size={30} />, name: "Premium", route: "/premium" },
  {
    icon: <FaRegUser size={30} />,
    name: "Profile",
    route: "",
  },
  { icon: <CiCircleMore size={30} />, name: "More", route: "/more" },
];

const Sidebar = () => {
  const location = useLocation();
  const [isSidebar, setSidebar] = useState(false);
  const userState = useRecoilValue(currentUserAtom);
  return (
    <>
      <div>
        <button
          className="ml-[15vw] md:hidden"
          onClick={() => setSidebar((prev) => !prev)}
        >
          Show Sidebar
        </button>
        <div
          className={`relative flex transition-all gap-2 max-md:flex-col ${
            isSidebar ? "right-0" : "right-full"
          } md:right-0`}
        >
          <div className="max-w-[280px] w-full p-2 md:p-4 md:border-r min-h-screen border-grey md:mx-[15vw]">
            <FaXTwitter size={30} className="ml-2" />
            {routes.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={
                    item.name === "Profile"
                      ? `/${userState.username}`
                      : item.route
                  }
                  className={`flex items-center gap-4 my-1 md:my-4 group rounded-full ${
                    location.pathname === item.route
                      ? "font-semibold"
                      : "font-medium"
                  }`}
                >
                  <div className="group-hover:bg-lightgrey flex gap-4 rounded-full p-2">
                    <p>{item.icon}</p>
                    <p className="text-2xl">{item.name}</p>
                  </div>
                </Link>
              );
            })}
            <button className="bg-primary text-white w-[80%] md:w-full py-4 px-4 rounded-full font-semibold text-xl hover:bg-primary/80 mt-2">
              Post
            </button>

            <Link
              to={`/${userState.username}`}
              className="block mt-[30%] md:mt-[70%]"
            >
              <div className="flex items-center justify-between px-3">
                <img src={userState.profilepic} alt="" />
                <div>
                  <p>{userState.name}</p>
                  <p className="text-darkgrey">@{userState.username}</p>
                </div>
                <BsThreeDots />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
