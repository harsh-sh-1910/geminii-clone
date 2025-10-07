import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Solutions from "./components/Solutions/Solutions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from "./components/Input/Input";
import UseContextProvider from "./Usecontext/UseContextProvider.jsx";

const App = () => {
  return (
    <UseContextProvider>
      <Router>
        <div className="flex overflow-y-hidden">
          <Sidebar />
          <div className="w-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/solutions" element={<Solutions />} />
            </Routes>
            <Input />
          </div>
        </div>
      </Router>
    </UseContextProvider>
  );
};

export default App;
