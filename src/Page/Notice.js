import { Button, Tabs } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Acc/Header";
import LeftSide from "../Acc/LeftSide";
import UnLogLeftSide from "../Acc/UnLogLeftSide";
import Footer from "../Acc/Footer";
import ReceiveItem from "../components/ReceiveItem";
import SendItem from "../components/SendItem";
import AnnounceItem from "../components/AnnounceItem";

const Notice = (props) => {
  const { isLogined, setIsLogined } = props;
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: "받은 쪽지",
      children: <ReceiveItem />,
    },
    {
      key: "2",
      label: "보낸 쪽지",
      children: <SendItem />,
    },
    {
      key: "3",
      label: "공지사항",
      children: <AnnounceItem />,
    },
  ];
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
              margin: "10px 0 30px 0",
              color: "navy",
            }}
          >
            알림
          </h2>
          {isLogined ? (
            <Tabs type="card" items={items} />
          ) : (
            <div>⚠️ 로그인이 되어있지 않아 사용자 정보를 볼 수 없습니다.</div>
          )}
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Notice;
