import React from "react";
import Post from "./component/Post";
import Notice from "./component/Notice";
import MainHeader from "./MainHeader";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <MainHeader />
      <br />
      <h1>일석삼조 게시판</h1>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
};

export default App;
