import React from "react";
import Post from "./component/Post";
import Notice from "./component/Notice";
import MainHeader from "./MainHeader";
import Page1 from "./component/Page1";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <MainHeader />
      <h1>일석삼조 게시판</h1>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </div>
  );
};

export default App;
