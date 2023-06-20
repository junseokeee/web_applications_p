import React from "react";
import { Link } from "react-router-dom";

const UnLogLeftSide = () => {
  return (
    <div style={{ position: "sticky", top: "25px" }}>
      <div
        style={{
          textAlign: "center",
          height: "250px",
          paddingTop: "10px",
          marginRight: "10px",
        }}
      >
        <div>
          <div style={{ margin: "20px" }}>로그인이 필요합니다.</div>
          <Link
            to="/login"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnLogLeftSide;
