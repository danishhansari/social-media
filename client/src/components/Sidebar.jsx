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
import { Outlet } from "react-router-dom";

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
  { icon: <FaRegUser size={30} />, name: "Profile", route: "/profile" },
  { icon: <CiCircleMore size={30} />, name: "More", route: "/more" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <div className="max-w-[280px] p-4 border-r h-screen border-grey">
        <FaXTwitter size={30} className="ml-4" />
        {routes.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.route}
              className={`flex items-center gap-4 my-4 group rounded-full ${
                location.pathname === item.route ? "font-semibold" : ""
              }`}
            >
              <div className="group-hover:bg-lightgrey flex p-2 gap-4 rounded-full px-4">
                <p>{item.icon}</p>
                <p className="text-2xl">{item.name}</p>
              </div>
            </Link>
          );
        })}
        <button className="bg-primary text-white w-full py-4 px-8 rounded-full font-semibold text-xl hover:bg-primary/80 mt-2">
          Post
        </button>

        <Link to={"/user-route"} className="block mt-[50%] md:mt-[70%]">
          <div className="flex items-center justify-between px-3">
            <img src="" alt="" />
            <div>
              <p>Danish</p>
              <p className="text-darkgrey">@danish_an</p>
            </div>
            <BsThreeDots />
          </div>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
