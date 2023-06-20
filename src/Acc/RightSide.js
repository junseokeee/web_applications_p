import { Space, Tag } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <div style={{ position: "sticky", top: "20px" }}>
      <div style={{ height: "500px", paddingLeft: "20px", paddingTop: "10px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
          많이 찾는 검색어
        </div>
        <Space size={[0, 8]} wrap>
          <Tag color="geekblue">
            <Link to="#">#공모전</Link>
          </Tag>
          <Tag color="geekblue">
            <Link to="#">#기말프로젝트</Link>
          </Tag>
          <Tag color="geekblue">
            <Link to="#">#포토폴리오</Link>
          </Tag>
          <Tag color="geekblue">
            <Link to="#">#react</Link>
          </Tag>
          <Tag color="geekblue">
            <Link to="#">#프로젝트</Link>
          </Tag>
          <Tag color="geekblue">
            <Link to="#">#python</Link>
          </Tag>
          <Tag color="geekblue">
            <Link to="#">#심리</Link>
          </Tag>
        </Space>
      </div>
    </div>
  );
};

export default RightSide;
