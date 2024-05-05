import { GoHome } from "react-icons/go";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { RiOpenaiFill } from "react-icons/ri";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaXTwitter, FaRegUser } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { currentUserAtom } from "../states/atom";
import { useRef, useState } from "react";

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

const SideNav = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const userState = useRecoilValue(currentUserAtom);
  const sidebarRef = useRef();

  const closeSideBar = () => {
    sidebarRef.current.click();
  };

  return (
    <>
      <button
        className="flex md:hidden absolute z-10 top-0 right-0"
        onClick={() => setShowSidebar((prev) => !prev)}
        ref={sidebarRef}
      >
        Show Sidebar Button
      </button>
      <div
        className={`max-w-[300px] w-full absolute ${
          showSidebar ? "left-0" : "-left-full"
        } h-screen border-r border-grey p-2 transition-all md:relative md:left-0  z-20 bg-white`}
      >
        <FaXTwitter size={30} className="ml-2" />
        {routes.map((item, index) => {
          return (
            <Link
              key={index}
              to={
                item.name === "Profile" ? `/${userState.username}` : item.route
              }
              className={`flex items-center gap-4 my-1 md:my-4 group rounded-full ${
                location.pathname === item.route ? "font-bold" : "font-medium"
              }`}
              onClick={closeSideBar}
            >
              <div className="group-hover:bg-lightgrey flex gap-4 rounded-full py-2 px-4">
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
          className="block mt-[40%] md:mt-[90%]"
        >
          <div className="flex items-center justify-between px-3">
            <img src="userState.profilepic" alt="" />
            <div>
              <p>{userState.name}</p>
              <p className="text-darkgrey">@{userState.username}</p>
            </div>
            <BsThreeDots />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SideNav;
