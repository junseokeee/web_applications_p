import React, { useRef, useState } from "react";
import Header from "../Acc/Header";
import LeftSide from "../Acc/LeftSide";
import "../Home/Home.css";
import { Avatar, Button, Input, Modal, Select, Space } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Portfolio from "./Portfolio";
import UnLogLeftSide from "../Acc/UnLogLeftSide";
import Footer from "../Acc/Footer";

const MyPage = (props) => {
  const navigate = useNavigate();
  const {
    userData,
    setUserData,
    isLogined,
    setIsLogined,
    data,
    setData,
    image,
    setImage,
  } = props;
  console.log(userData);
  console.log(isLogined);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addtitle, setAddtitle] = useState("");
  const [addurl, setAddurl] = useState("");
  const [file, setFile] = useState("");
  const fileInput = useRef(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("data : " + data);
    setData([...data, { title: addtitle, url: addurl }]);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const img_onChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
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
          <h2
            style={{
              fontWeight: "bolder",
              fontSize: "1.5rem",
              marginTop: "10px",
              color: "navy",
            }}
          >
            마이페이지
          </h2>
          <div
            style={{
              backgroundColor: "white",
              height: "550px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className="profile"
              style={{ flexGrow: "6", textAlign: "center" }}
            >
              <Space direction="vertical">
                <Avatar
                  src={image}
                  style={{ margin: "10px" }}
                  size={200}
                  icon={<UserOutlined />}
                />
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/jpg,impge/png,image/jpeg"
                  name="profile_img"
                  onChange={img_onChange}
                  ref={fileInput}
                />
                <Button
                  style={{ width: "200px", margin: "10px", display: "block" }}
                  type="primary"
                  icon={<UploadOutlined />}
                  onClick={() => {
                    fileInput.current.click();
                  }}
                >
                  프로필 사진 변경
                </Button>
                <Button
                  type="dashed"
                  style={{ width: "200px", margin: "10px", display: "block" }}
                  onClick={() => {
                    setImage(
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    );
                  }}
                >
                  프로필 사진 초기화
                </Button>
              </Space>
            </div>
            <div style={{ flexGrow: "8" }}>
              <ul>
                <li>
                  아이디
                  <Input
                    style={{
                      margin: "0 0px 0 15px",
                      display: "inline-block",
                      width: "200px",
                    }}
                    onChange={(e) => {
                      setUserData({
                        userID:
                          userData.userID === e.target.value
                            ? userData.userID
                            : e.target.value,
                        userPWD: userData.userPWD,
                        userEdu: userData.userEdu,
                        userMaj: userData.userMaj,
                        userPort: userData.userPort,
                        userImg: userData.userImg,
                      });
                    }}
                    defaultValue={isLogined ? userData.userID : ""}
                  />
                </li>
                <li>
                  학력
                  <Select
                    defaultValue={isLogined ? userData.userEdu : "학력선택"}
                    style={{
                      width: "200px",
                      marginLeft: "30px",
                    }}
                    onChange={(e) => {
                      setUserData({
                        userID: userData.userID,
                        userPWD: userData.userPWD,
                        userEdu: e,
                        userMaj: userData.userMaj,
                        userPort: userData.userPort,
                        userImg: userData.userImg,
                      });
                    }}
                    options={[
                      { value: "학력선택" },
                      { value: "고등학교 졸업" },
                      { value: "대학교 재학" },
                      { value: "대학교 휴학" },
                      { value: "대학교 졸업" },
                    ]}
                  />
                </li>
                <li>
                  학과
                  <Select
                    defaultValue={isLogined ? userData.userMaj : "학력선택"}
                    style={{
                      width: "200px",
                      marginLeft: "30px",
                    }}
                    onChange={(e) => {
                      setUserData({
                        userID: userData.userID,
                        userPWD: userData.userPWD,
                        userEdu: userData.userEdu,
                        userMaj: e,
                        userPort: userData.userPort,
                        userImg: userData.userImg,
                      });
                    }}
                    options={[
                      { value: "학과선택" },
                      { value: "컴퓨터" },
                      { value: "디자인/일러스트" },
                      { value: "언어" },
                      { value: "경영/마케팅" },
                      { value: "심리" },
                      { value: "음악" },
                      { value: "음식/요리" },
                      { value: "언론/커뮤니케이션" },
                      { value: "기타" },
                    ]}
                  />
                </li>
                <li>
                  나의 포토폴리오{" "}
                  <Button style={{ marginLeft: "10px" }} onClick={showModal}>
                    추가
                  </Button>
                  <Modal
                    title="포토폴리오 추가"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <div style={{ marginBottom: "5px" }}>Title</div>
                    <Input
                      placeholder="Please write your portfolio title..."
                      value={addtitle}
                      onChange={(e) => {
                        setAddtitle(e.target.value);
                      }}
                    />
                    <div style={{ marginBottom: "5px" }}>URL</div>
                    <Input
                      placeholder="Please write your portfolio url..."
                      value={addurl}
                      onChange={(e) => {
                        setAddurl(e.target.value);
                      }}
                    />
                  </Modal>
                </li>
                <div
                  style={{
                    height: "300px",
                    border: "solid 1px lightgray",
                    overflowY: "scroll",
                    padding: "10px",
                  }}
                >
                  {isLogined ? (
                    <Portfolio data={data} setData={setData} />
                  ) : (
                    <Portfolio />
                  )}
                </div>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: "end" }}>
            <Button
              type="primary"
              style={{ float: "right", margin: "5px" }}
              onClick={() => {
                if (isLogined) {
                  setUserData({
                    userID: userData.userID,
                    userPWD: userData.userPWD,
                    userEdu: userData.userEdu,
                    userMaj: userData.userMaj,
                    userPort: data,
                    userImg: userData.userImg,
                  });
                  alert("수정되었습니다.");
                } else alert("로그인 후 이용 가능합니다.");
              }}
            >
              변경사항 저장
            </Button>
            <Button
              type="dashed"
              style={{ float: "right", margin: "5px" }}
              onClick={() => {
                setUserData();
                setIsLogined(false);
                navigate("/");
              }}
            >
              회원 탈퇴
            </Button>
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MyPage;
