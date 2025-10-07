import { useState } from "react";
import { FiPlus, FiMenu } from "react-icons/fi";
import { IoHelpCircleSharp, IoSettingsSharp } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="hidden md:flex flex-col justify-between items-center ">
      <div
        className={`${
          isOpen ? "w-48" : "w-16"
        } h-screen bg-gray-300 shadow-md p-4 transition-all duration-300 flex flex-col justify-between text-center`}
      >
        <div className="flex flex-col text-center gap-15">
          <button
            className="text-gray-600 text-3xl ps-0.5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu />
          </button>

          <button className="cursor-pointer w-9 h-9 bg-gray-400 text-white text-2xl rounded-full flex items-center justify-center shadow">
            <FiPlus />
          </button>
        </div>
        <div className="flex flex-col text-3xl gap-4 text-gray-400">
          <div className=" h-10 flex flex-row gap-2 items-center cursor-pointer">
            <button className="cursor-pointer">
              <IoHelpCircleSharp />
            </button>
            {isOpen && <span className="text-2xl">Help</span>}
          </div>
          <div className="cursor-pointer h-10 flex flex-row gap-2 items-center">
            <button className="cursor-pointer">
              <IoSettingsSharp />
            </button>
            {isOpen && <span className="text-2xl">Settings</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
