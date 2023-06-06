import { Link } from "react-router-dom";
import React from "react";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <aside className="main">
      <Link to="/">마이페이지</Link>
      <Link to="/post">글관리</Link>
      <Link to="/notice">알림</Link>
      <br />
      <Link to="/">로그아웃</Link>
    </aside>
  );
};

export default MainHeader;
