import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { IoMdClose } from "react-icons/io";

const EditProfile = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="flex max-w-[1300px] mx-auto bg-white text-black">
        <Sidebar />
        <div className="w-full md:w-1/2">
          <div className="py-4 w-full px-4 border-grey border-b flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <button onClick={() => navigate("/")}>
                <IoMdClose size={25} />
              </button>
              <h2 className="font-semibold">Edit Profile</h2>
            </div>
            <button className="bg-black text-white px-4 rounded-full font-semibold py-1 hover:bg-black/70">
              Save
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
