import React, { useContext, useState } from "react";
import { IoSend } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ResultContext from "../../UseContext/ResultContext";

const Input = () => {
  const [value, setValue] = useState("");
  const { setQuestion, setAnswer } = useContext(ResultContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestion(value);
    setAnswer("");
    setValue("");
    navigate("/solutions");
  };
  return (
    // <div className="w-full flex items-center justify-center h-[20vh]">
    //   <div className="bg-gray-200 w-[50%] h-13 rounded-full flex items-center justify-between px-5">
    //     <form
    //       className="flex w-full justify-between items-center rounded-4xl"
    //       onSubmit={handleSubmit}
    //     >
    //       <input
    //         type="text"
    //         name=""
    //         id=""
    //         placeholder="enter a prompt text"
    //         className="flex-1 outline-none text-black px-2"
    //         value={value}
    //         onChange={(e) => {
    //           setValue(e.target.value);
    //         }}
    //       />
    //       <div className="cursor-pointer flex gap-5 text-xl text-gray-500">
    //         <FaImage />
    //         <button
    //           className="active:text-dark transition-colors durations-200"
    //           onClick={handleSubmit}
    //           onKeyDown={handleSubmit}
    //         >
    //           {" "}
    //           <IoSend />
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <div className="w-full flex items-center justify-center px-2 h-[20vh] flex-col mt-5 ">
      <div className="bg-gray-200 w-full max-w-3xl rounded-full flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3">
        <form
          className="flex w-full items-center gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter a prompt text"
            className="flex-1 outline-none text-black bg-transparent text-sm sm:text-base px-2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex gap-4 items-center text-2xl text-gray-500 cursor-pointer">
            <button className="cursor-pointer ">
              <IoSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
