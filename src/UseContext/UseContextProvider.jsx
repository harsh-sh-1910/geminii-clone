import React, { useEffect, useState } from "react";
import ResultContext from "./ResultContext";
import { GoogleGenAI } from "@google/genai";

const UseContextProvider = ({ children }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const main = async () => {
    const ai = new GoogleGenAI({
      apiKey: "AIzaSyBIROToD4TIbV4szW_UAAqMg0QZzPtfUhI",
    });
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        // contents: "react",
        contents: question,
      });
      setAnswer(response.text);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    main();
  }, [question]);
  return (
    <ResultContext.Provider
      value={{ question, setQuestion, answer, setAnswer }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default UseContextProvider;
