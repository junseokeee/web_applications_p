import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signcss.css";
import collabo_logo from "../Acc/logo.png";

function Login(props) {
  const { userData, setIsLogined } = props;
  const navigate = useNavigate();
  const [id, userId] = useState("");
  const [pwd, userPwd] = useState("");

  const userIdChange = (e) => {
    userId(e.target.value);
  };

  const userPwdChange = (e) => {
    userPwd(e.target.value);
  };

  const userLogin = () => {
    console.log("ID:", id);
    console.log("Pwd:", pwd);

    if (id === userData?.userID && pwd === userData?.userPWD) {
      setIsLogined(true);
      window.alert(`로그인 성공! ${id}님 반갑습니다!`);
      navigate("/");
    } else {
      setIsLogined(false);
      alert(
        "존재하지 않는 정보거나 잘못 입력된 정보입니다. 다시 입력해주세요."
      );
    }
  };

  const userMyPage = () => {
    navigate("/join");
  };

  return (
    <div className="login-container">
      <img
        src={collabo_logo}
        alt="logo"
        style={{ height: "100px", marginBottom: "20px" }}
      />
      <div className="login-form">
        <h2>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;로그인
        </h2>
        <br />

        <label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ID
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="inputsetting"
            type="text"
            value={id}
            onChange={userIdChange}
            placeholder="아이디"
          />
        </label>
        <label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PWD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="inputsetting"
            type="password"
            value={pwd}
            onChange={userPwdChange}
            placeholder="비밀번호"
          />
        </label>
        <br />
        <button className="loginbutton buttonsetting" onClick={userLogin}>
          로그인
        </button>
        <button className="myPagebutton buttonsetting" onClick={userMyPage}>
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login;
