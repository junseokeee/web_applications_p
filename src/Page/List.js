import React from "react";
import Footer from "../Acc/Footer";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import { Button, Tabs } from "antd";
import Header from "../Acc/Header";
import LeftSide from "../Acc/LeftSide";
import UnLogLeftSide from "../Acc/UnLogLeftSide";
import WrittenItem from "../components/WrittenItem";
import FavoriteItem from "../components/FavoriteItem";

const List = (props) => {
  const { isLogined, setIsLogined, listdata, favoriteList } = props;
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: "내가 작성한 글",
      children: <WrittenItem listdata={listdata} />,
    },
    {
      key: "2",
      label: "관심 글",
      children: <FavoriteItem favoriteList={favoriteList} />,
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
            글 관리
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

export default List;
