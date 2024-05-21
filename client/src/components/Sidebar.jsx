import { GoHome } from "react-icons/go";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaXTwitter, FaRegUser } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { currentUserAtom, sidebarToggle } from "../states/atom.js";
import { useRecoilState } from "recoil";
import { useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookie from "js-cookie";
import { IoMdClose } from "react-icons/io";

const routes = [
  { icon: <GoHome size={30} />, name: "Home", route: "/" },
  { icon: <IoSearchOutline size={30} />, name: "Explore", route: "/explore" },
  {
    icon: <IoNotificationsOutline size={30} />,
    name: "Notifications",
    route: "/notification",
  },
  { icon: <AiOutlineMessage size={30} />, name: "Message", route: "/message" },
  {
    icon: <MdOutlineBookmarkBorder size={30} />,
    name: "Bookmark",
    route: "/bookmark",
  },
  {
    icon: <FaRegUser size={30} />,
    name: "Profile",
    route: "",
  },
];

const SideNav = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarToggle);
  const [userState, setUserState] = useRecoilState(currentUserAtom);
  const sidebarRef = useRef();
  const navigate = useNavigate();

  const logoutUser = () => {
    setUserState({});
    Cookie.remove("token");
    navigate("/login");
  };

  const closeSideBar = () => {
    sidebarRef.current.click();
  };

  return (
    <>
      <div
        className={`max-w-[300px] w-full absolute ${
          showSidebar ? "left-0" : "-left-full"
        } h-screen overflow-hidden border-r border-grey p-2 transition-all md:sticky md:left-0 md:top-0  z-20 bg-white`}
      >
        <div className="flex items-center justify-between">
          <FaXTwitter size={30} className="ml-2 md:ml-4" />
          <button
            className="md:hidden hover:bg-grey/30 rounded-full p-1"
            onClick={() => setShowSidebar((prev) => !prev)}
          >
            <IoMdClose size={20} />
          </button>
        </div>
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
              <div className="group-hover:bg-lightgrey flex gap-4 rounded-full py-2 px-2  md:px-4">
                <p>{item.icon}</p>
                <p className="text-2xl">{item.name}</p>
              </div>
            </Link>
          );
        })}
        <button className="bg-primary text-white w-[80%] md:w-full py-4 px-4 rounded-full font-semibold text-xl hover:bg-primary/80 mt-2">
          Post
        </button>
        <div className="flex items-center justify-between w-full relative h-full bottom-12">
          <Link to={`/${userState.username}`}>
            <div className="flex items-center gap-4 justify-between px-3">
              <img
                className="w-12 h-12 rounded-full"
                src={userState.profile_img}
                alt={`${userState.name} profile pic`}
              />
              <div>
                <p>{userState.name}</p>
                <p className="text-darkgrey">@{userState.username}</p>
              </div>
            </div>
          </Link>
          <button
            className="hover:bg-black/10 p-2 rounded-full"
            onClick={logoutUser}
          >
            <CiLogout size={25} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SideNav;
