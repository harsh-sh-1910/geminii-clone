import React, { useContext } from "react";
import ResultContext from "../../UseContext/ResultContext";

const Solutions = () => {
  const { answer, question } = useContext(ResultContext);

  return (
    <div className="w-full h-[70vh] flex items-center justify-center">
      <div className="w-[60%] h-full flex flex-col items-center pb-5 justify-between">
        <div className="w-full h-[6vh]  px-10 flex justify-end items-center ">
          {question}
        </div>
        <div className="h-[70vh]  w-full px-5 overflow-auto whitespace-pre-line">
          {answer ? (
            <div
              dangerouslySetInnerHTML={{ __html: answer.replace(/\*/g, "") }}
            ></div>
          ) : (
            <div className="flex justify-end items-center space-x-2 my-6 px-5">
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
