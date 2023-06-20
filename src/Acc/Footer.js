import React from "react";
import "./Footer.css";
import { Col, Row, Space } from "antd";
import { Link } from "react-router-dom";
import {
  FacebookFilled,
  GoogleSquareFilled,
  InfoCircleFilled,
  InstagramFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContents">
        <Row>
          <Col span={12}>
            <div className="footerMenuItem" style={{ marginLeft: "30px" }}>
              <ul className="footerMenu">
                <li className="footerMenuItem">
                  <InfoCircleFilled /> Site : Collabo
                </li>
                <li className="footerMenuItem" style={{ width: "820px" }}>
                  백석대학교 웹응용 프로그래밍 수업에서 진행한 기말프로젝트
                  일석삼조의 작품으로 팀 프로젝트, 공모전 등을 위해서 팀원
                  모집하는 게시물을 올리고 같이 협업할 수 있는 게시판 사이트
                </li>
                <li className="footerMenuItem">
                  Copyright 일석삼조. All Rights Reserved
                </li>
              </ul>
            </div>
          </Col>
          <Col span={4}>
            <ul className="footerMenu">
              <li className="footerMenuItem">
                <Link to="/">Home</Link>
              </li>
              <li className="footerMenuItem">
                <Link to="/myPage">My Page</Link>
              </li>
              <li className="footerMenuItem">
                <Link to="/list">Collabo Board</Link>
              </li>
              <li className="footerMenuItem">
                <Link to="/notice">Notice</Link>
              </li>
            </ul>
          </Col>
          <Col span={4}>
            <ul className="footerMenu">
              <li className="footerMenuItem">이용약관</li>
              <li className="footerMenuItem">개인정보보호정책</li>
            </ul>
          </Col>
          <Col span={4}>
            <div
              style={{ fontSize: "2.3rem", color: "gray", textAlign: "center" }}
            >
              <Space direction="horizontal">
                <InstagramFilled />
                <TwitterSquareFilled />
                <FacebookFilled />
                <GoogleSquareFilled />
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
