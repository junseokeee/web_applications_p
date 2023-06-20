import { Button, Col, Row, Space } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Acc/Header";
import LeftSide from "../Acc/LeftSide";
import UnLogLeftSide from "../Acc/UnLogLeftSide";
import Footer from "../Acc/Footer";
import "../Home/Home.css";

const EditListItem = (props) => {
  const { id } = useParams();
  const { listdata, isLogined, setIsLogined } = props;
  const navigate = useNavigate();

  return (
    <div className="container">
      <div style={{ display: "block", textAlign: "end", padding: "5px" }}>
        <Button
          style={{ marginRight: "10px" }}
          onClick={() => {
            navigate("/join");
          }}
        >
          회원가입
        </Button>
        <Button
          onClick={() => {
            if (isLogined) {
              setIsLogined(false);
              navigate("/");
            } else navigate("/login");
          }}
        >
          {isLogined ? "로그아웃" : "로그인"}
        </Button>
      </div>
      <Header />
      <div className="content">
        <nav
          style={{
            border: "none",
            borderRightStyle: "dashed",
            borderRightwidth: "1px",
            borderRightColor: "navy",
            margin: 0,
            padding: 0,
          }}
        >
          {isLogined ? <LeftSide /> : <UnLogLeftSide />}
        </nav>
        <main style={{ minHeight: "100vh", paddingLeft: "20px" }}>
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            {listdata.map((item, index) => {
              return (
                index == id && (
                  <>
                    <h2
                      style={{
                        fontWeight: "bolder",
                        fontSize: "1.7rem",
                        marginTop: "10px",
                        color: "navy",
                      }}
                    >
                      {item.title}
                    </h2>
                    <h3>프로젝트 조건</h3>
                    <ul>
                      <Row>
                        <Col span={12}>
                          <li>☑️ 모집 분야 : {item.acquireMajor}</li>
                          <li>☑️ 모집 인원 : {item.numberTeam}</li>
                        </Col>
                        <Col span={12}>
                          <li>☑️ 모집 장소 : {item.location}</li>
                          <li>☑️ 필요 학력 : {item.education}</li>
                        </Col>
                      </Row>
                    </ul>
                    <h3>프로젝트 내용</h3>
                    <div
                      style={{
                        width: "95%",
                        height: "200px",
                        overflowY: "auto",
                        backgroundColor: "lightgray",
                        padding: "50px 20px 30px 10px",
                        borderRadius: "10px",
                      }}
                    >
                      {item.contents}
                    </div>
                    <div
                      style={{
                        width: "97%",
                        textAlign: "end",
                        marginTop: "10px",
                      }}
                    >
                      <Space direction="horizontal">
                        <Button
                          type="primary"
                          onClick={() => {
                            if (isLogined) {
                              navigate(`/update/${index}`);
                            } else alert("로그인이 필요한 서비스입니다.");
                          }}
                        >
                          수정
                        </Button>
                        <Button
                          onClick={() => {
                            navigate("/list");
                          }}
                        >
                          취소
                        </Button>
                      </Space>
                    </div>
                  </>
                )
              );
            })}
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default EditListItem;
