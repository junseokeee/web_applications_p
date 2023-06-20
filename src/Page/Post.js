import { Button, Input, Col, Row } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Acc/Header";
import LeftSide from "../Acc/LeftSide";
import UnLogLeftSide from "../Acc/UnLogLeftSide";
import Footer from "../Acc/Footer";

const Majors = [
  { value: "상관없음" },
  { value: "IT/개발자" },
  { value: "디자인/일러스트" },
  { value: "언어" },
  { value: "경영/마케팅" },
  { value: "음악" },
  { value: "음식/요리" },
  { value: "언론/커뮤니케이션" },
  { value: "기타" },
];

const Locations = [
  { value: "온라인/오프라인 병행" },
  { value: "온라인" },
  { value: "오프라인" },
];

const EduBackground = [
  { value: "상관없음" },
  { value: "고등학교 재학생" },
  { value: "대학교 재학생" },
  { value: "대학원 재학생" },
];

function Post(props) {
  const { isLogined, setIsLogined, listdata, setListdata } = props;
  const navigate = useNavigate();
  const [TitleValue, setTitleValue] = useState("");
  const [AcquireMajorValue, setAcquireMajor] = useState(1);
  const [NumberTeamValue, setNumberTeam] = useState(0);
  const [LocationValue, setLocation] = useState();
  const [EducationValue, setEducation] = useState(0);
  const [DescriptionValue, setDescription] = useState("");
  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onAcquireMajorSelectChange = (event) => {
    setAcquireMajor(event.currentTarget.value);
  };

  const onNumberTeamSelectChange = (event) => {
    setNumberTeam(event.currentTarget.value);
  };

  const onLocationChange = (event) => {
    setLocation(event.currentTarget.value);
  };

  const onEducationChange = (event) => {
    setEducation(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.currentTarget.value);
  };
  const onSubmit = (event) => {
    console.log("제출됨");
    event.preventDefault();

    const values = {
      title: TitleValue,
      acquireMajor: AcquireMajorValue,
      numberTeam: NumberTeamValue,
      location: LocationValue,
      education: EducationValue,
      contents: DescriptionValue,
    };
    if (isLogined) {
      if ((values.title !== "") & (values.contents !== "")) {
        setListdata([...listdata, values]);
        navigate("/");
      } else {
        alert("작성하지 않은 칸이 있습니다.");
      }
    } else alert("로그인이 필요한 서비스입니다.");
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
          {/* 지현님 파트 */}
          <div style={{ margin: "10px" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h2 style={{ textAlign: "left" }}>모집글 작성하기</h2>
            </div>
            <div style={{ backgroundColor: "lightgray", height: "500px" }}>
              <form onSubmit={onSubmit}>
                <Input
                  style={{ margin: "20px", width: "97%" }}
                  placeholder="제목"
                  type="text"
                  className="text"
                  value={TitleValue}
                  onChange={onTitleChange}
                />
                <Row
                  style={{
                    backgroundColor: "gray",
                    width: "97%",
                    margin: "0 20px 20px 20px",
                    borderRadius: "10px",
                  }}
                >
                  <Col span={12} style={{ padding: "20px" }}>
                    <label style={{ marginRight: "15px" }}>모집분야</label>
                    <select
                      style={{ width: "208px" }}
                      onChange={onAcquireMajorSelectChange}
                    >
                      {Majors.map((item) => (
                        <option key={item.key} value={item.key}>
                          {item.value}
                        </option>
                      ))}
                    </select>
                    <br />
                    <br />
                    <label style={{ marginRight: "15px" }}>모집인원</label>
                    <input
                      style={{ width: "200px" }}
                      type="number"
                      onChange={onNumberTeamSelectChange}
                      value={NumberTeamValue}
                    />
                  </Col>
                  <Col span={12} style={{ padding: "20px" }}>
                    <label style={{ marginRight: "15px" }}>필요학력</label>
                    <select
                      style={{ width: "208px" }}
                      onChange={onEducationChange}
                    >
                      {EduBackground.map((item) => (
                        <option key={item.key} value={item.key}>
                          {item.value}
                        </option>
                      ))}
                    </select>
                    <br />
                    <br />
                    <label style={{ marginRight: "15px" }}>모집장소</label>
                    <select
                      style={{ width: "208px" }}
                      onChange={onLocationChange}
                    >
                      {Locations.map((item) => (
                        <option key={item.key} value={item.key}>
                          {item.value}
                        </option>
                      ))}
                    </select>
                  </Col>
                </Row>
                <div style={{ width: "97%", margin: "0 20px 20px 20px" }}>
                  <div>소개글</div>
                  <br />
                  <textarea
                    style={{ width: "100%" }}
                    onChange={onDescriptionChange}
                    placeholder="모집하고자 하는 프로젝트에 대해 소개해보세요."
                    value={DescriptionValue}
                    rows={10}
                    cols={100}
                  ></textarea>
                </div>
                <Button
                  type="primary"
                  style={{ float: "right", margin: "21px" }}
                  onClick={onSubmit}
                >
                  작성
                </Button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Post;
