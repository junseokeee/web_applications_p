import { Avatar, Button, Col, Input, Row, Space } from "antd";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Acc/Header";
import LeftSide from "../Acc/LeftSide";
import UnLogLeftSide from "../Acc/UnLogLeftSide";
import Footer from "../Acc/Footer";
import "../Home/Home.css";
import RightSide from "../Acc/RightSide";
import { UserOutlined } from "@ant-design/icons";

const BoardListItem = (props) => {
  const { id } = useParams();
  const { listdata, isLogined, setIsLogined, favoriteList, setFavoriteList } =
    props;
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedComment = comment;
    if (isLogined) {
      if (updatedComment !== "")
        setCommentList([...commentList, updatedComment]);
    } else alert("로그인이 필요한 서비스입니다.");
    setComment("");
  };
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
                      <Button
                        type="primary"
                        onClick={() => {
                          if (isLogined) {
                            setFavoriteList(...favoriteList, [
                              {
                                title: item.title,
                                acquireMajor: item.acquireMajor,
                                numberTeam: item.numberTeam,
                                location: item.location,
                                education: item.education,
                                contents: item.contents,
                              },
                            ]);
                            alert("관심 글 설정이 완료되었습니다.");
                            navigate("/");
                          } else alert("로그인이 필요한 서비스입니다.");
                        }}
                      >
                        관심 설정
                      </Button>
                      <Button
                        type="primary"
                        style={{ marginLeft: "20px" }}
                        onClick={() => {
                          if (isLogined) {
                            if (window.confirm("참가 신청하시겠습니까?")) {
                              alert("참가 신청이 완료되었습니다.");
                            }
                          } else alert("로그인이 필요한 서비스입니다.");
                        }}
                      >
                        참가 신청
                      </Button>
                    </div>
                    <h4>댓글 전체보기</h4>
                    <hr />
                    <div
                      style={{
                        width: "100%",
                        height: "300px",
                        overflowY: "scroll",
                      }}
                    >
                      {commentList.map((item, index) => (
                        <div>
                          <Space direction="horizontal">
                            <Avatar
                              style={{ margin: "10px" }}
                              size={25}
                              icon={<UserOutlined />}
                            />
                            <div key={index}>유저 : {item}</div>
                          </Space>
                        </div>
                      ))}
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      style={{ marginBottom: "30px" }}
                    >
                      <Input
                        placeholder="댓글을 입력하세요"
                        type="text"
                        className="text"
                        value={comment}
                        onChange={handleInputChange}
                      />
                    </form>
                  </>
                )
              );
            })}
          </div>
        </main>
        <div
          className="aside"
          style={{
            border: "none",
            borderLeftStyle: "dashed",
            borderLeftwidth: "1px",
            borderLeftColor: "navy",
            margin: 0,
            padding: 0,
          }}
        >
          <RightSide />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BoardListItem;
