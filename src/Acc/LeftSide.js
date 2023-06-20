import {
  BellFilled,
  DatabaseFilled,
  HomeFilled,
  SmileFilled,
} from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const LeftSide = () => {
  return (
    <div style={{ position: "sticky", top: "25px" }}>
      <div
        style={{
          height: "150px",
          paddingTop: "10px",
          marginRight: "10px",
        }}
      >
        <h3 className="sidebarTitle">Menuboard</h3>
        <ul className="sidebarMenu">
          <li className="sidebarItem">
            <NavLink
              exact
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "black" } : { color: "gray" }
              }
            >
              <HomeFilled /> 홈페이지
            </NavLink>
          </li>
          <li className="sidebarItem">
            <NavLink
              exact
              to="/myPage"
              style={({ isActive }) =>
                isActive ? { color: "black" } : { color: "gray" }
              }
            >
              <SmileFilled /> 마이페이지
            </NavLink>
          </li>
          <li className="sidebarItem">
            <NavLink
              exact
              to="/list"
              style={({ isActive }) =>
                isActive ? { color: "black" } : { color: "gray" }
              }
            >
              <DatabaseFilled /> 글 관리
            </NavLink>
          </li>
          <li className="sidebarItem">
            <NavLink
              exact
              to="/notice"
              style={({ isActive }) =>
                isActive ? { color: "black" } : { color: "gray" }
              }
            >
              <BellFilled /> 알림
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
