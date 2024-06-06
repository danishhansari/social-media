import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { IoMdClose } from "react-icons/io";
import { useRecoilValue } from "recoil";
import { currentUserAtom } from "../states/atom";
import { TbCameraPlus } from "react-icons/tb";

const EditProfile = () => {
  const navigate = useNavigate();
  const currentUser = useRecoilValue(currentUserAtom);
  console.log(currentUser);

  return (
    <>
      <div className="flex max-w-[1300px] mx-auto bg-white text-black">
        <Sidebar />
        <div className="w-full md:w-1/2 border-r border-grey">
          <div className="py-4 w-full px-4 border-grey border-b flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <button
                className="hover:bg-grey/20 rounded-full p-2"
                onClick={() => navigate("/")}
              >
                <IoMdClose size={25} />
              </button>
              <h2 className="font-semibold">Edit Profile</h2>
            </div>
            <button className="bg-black text-white px-4 rounded-full font-semibold py-1 hover:bg-black/70">
              Save
            </button>
          </div>

          <div className="w-full h-[20vh] relative">
            <div className="overlay bg-black/20 w-full h-full absolute top-0 left-0 flex items-center justify-center gap-2">
              <button className="bg-black/40 hover:bg-black/30 text-white p-2 rounded-full">
                <TbCameraPlus size={20} />
              </button>
              <button className="bg-black/40 hover:bg-black/30 text-white p-2 rounded-full">
                <IoMdClose size={20} />
              </button>
            </div>
            <img src={currentUser.banner} className="w-full h-full" alt="" />
          </div>
          <div className="flex justify-between items-center px-4 md:px-6 relative w-full">
            <div className="rounded-full w-20 h-20 md:w-32 md:h-32 object-cover border-4 border-white -mt-8 md:-mt-16 relative z-10">
              <div className="absolute top-0 left-0 bg-black/30 h-full w-full rounded-full flex items-center justify-center">
                <button className="text-white bg-black/60 rounded-full p-2 hover:bg-black/30">
                  <TbCameraPlus size={25} />
                </button>
              </div>
              <img
                src={currentUser.profile_img}
                className="rounded-full"
                alt={`${currentUser.name} profile image`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
