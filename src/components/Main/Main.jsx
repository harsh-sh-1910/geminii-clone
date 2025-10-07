import React from "react";

const Main = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-between ">
      <h1 className=" pt-20 text-4xl font-semibold px-7 md:px-0 lg:text-6xl ">
        <span className="font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
          Hello, there.
        </span>
        <br />
        <span className="text-gray-400"> How can i help you today?</span>
      </h1>
      <div className="hidden lg:flex gap-5 ">
        <div className="w-50 h-50 bg-gray-200 rounded-3xl cursor-pointer flex flex-col">
          <p className="text-black p-5">
            suggest videos to quickly solve a problem
          </p>
        </div>
        <div className="w-50 h-50 bg-gradient-to-b from-blue-500 to-pink-400 rounded-3xl cursor-pointer">
          <p className="text-white p-4">
            How to get ready for life at my university
          </p>
        </div>
        <div className="w-50 h-50 bg-gray-200 rounded-3xl cursor-pointer">
          <p className="text-black p-4">
            Road trip drive time and kids entertainment ideas
          </p>
        </div>
        <div className="w-50 h-50 bg-gradient-to-b from-pink-500 to-blue-400 rounded-3xl cursor-pointer ">
          <p className="text-white p-5">
            Create a 12-week study plan for learning a new language
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
