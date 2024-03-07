import { SiOpenai } from "react-icons/si";
import { IoCreateOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-zinc-950 text-white p-6 h-screen relative border-r border-gray-300">
      <div className="flex items-center gap-2 h-12 hover:bg-zinc-800 absolute top-4">
        <SiOpenai
          size={44}
          className="border rounded-full p-2 bg-white text-black"
        />
        <button className="flex gap-6">
          <p>New chat</p>
          <IoCreateOutline size={24} />
        </button>
      </div>
      <div className="absolute top-20">Questions</div>
      <div className="absolute bottom-5">
        <div className="flex gap-2 items-center">
          <BsStars
            size={32}
            className="border-2 border-gray-400 rounded-full px-1 py-1"
          />
          <span>
            <h1>Upgrade plan</h1>
            <p className="text-gray-300 text-sm">Get GPT_4, DALL_E, and more</p>
          </span>
        </div>
        <div className="flex gap-2 items-center mt-3">
          <FaRegUser
            size={32}
            className="border-2 border-gray-400 rounded-full px-1 py-1"
          />
          <p>User Name</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
