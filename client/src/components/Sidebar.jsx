import { GoHome } from "react-icons/go";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { RiOpenaiFill } from "react-icons/ri";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaXTwitter, FaRegUser } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { Link } from "react-router-dom";

const routes = [
  { icon: <GoHome size={25} />, name: "Home", route: "/" },
  { icon: <IoSearchOutline size={25} />, name: "Explore", route: "/explore" },
  {
    icon: <IoNotificationsOutline size={25} />,
    name: "Notifications",
    route: "/notification",
  },
  { icon: <AiOutlineMessage size={25} />, name: "Message", route: "/message" },
  { icon: <RiOpenaiFill size={25} />, name: "Grok", route: "/grok" },
  {
    icon: <MdOutlineBookmarkBorder size={25} />,
    name: "Bookmark",
    route: "/bookmark",
  },
  { icon: <FaXTwitter size={25} />, name: "Premium", route: "/premium" },
  { icon: <FaRegUser size={25} />, name: "Profile", route: "/profile" },
  { icon: <CiCircleMore size={25} />, name: "More", route: "/more" },
];

const Sidebar = () => {
  return (
    <>
      {routes.map((item, index) => {
        return (
          <Link key={index} to={item.route} className="flex items-center gap-2">
            <p>{item.icon}</p>
            <p>{item.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default Sidebar;
