import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Join&Login/Signcss.css";
import collabo_logo from "../Acc/logo.png";

const Majors = [
  { value: "컴퓨터" },
  { value: "디자인/일러스트" },
  { value: "언어" },
  { value: "경영/마케팅" },
  { value: "심리" },
  { value: "음악" },
  { value: "음식/요리" },
  { value: "언론/커뮤니케이션" },
  { value: "기타" },
];

const EduBackground = [
  { value: "상관없음" },
  { value: "고등학교 졸업" },
  { value: "대학교 재학" },
  { value: "대학교 휴학" },
  { value: "대학교 졸업" },
  { value: "대학원 재학" },
  { value: "대학원 졸업" },
];

function Join({ userSignUp }) {
  const navigate = useNavigate();
  const [id, userId] = useState("");
  const [pwd, userPwd] = useState("");
  const [edu, userEducation] = useState("");
  const [maj, userMajor] = useState("");

  const userIdChange = (e) => {
    userId(e.target.value);
  };

  const userPwdChange = (e) => {
    userPwd(e.target.value);
  };

  const userEducationChange = (e) => {
    userEducation(e.target.value);
  };

  const userMajorChange = (e) => {
    userMajor(e.target.value);
  };

  const userMyPage = () => {
    if (id && pwd) {
      userSignUp(id, pwd, edu, maj);
      window.alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } else {
      window.alert("다시 입력해주세요.");
    }
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;회원가입
        </h2>
        <br />

        <label className="label">
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

        <label className="label">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PWD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="inputsetting"
            type="password"
            value={pwd}
            onChange={userPwdChange}
            placeholder="비밀번호"
          />
        </label>

        <label className="label">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 학력 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select value={edu} onChange={userEducationChange}>
            <option value="">학력 선택</option>
            {EduBackground.map((edu) => (
              <option key={edu.key} value={edu.value}>
                {edu.value}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label className="label">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 학과 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select value={maj} onChange={userMajorChange}>
            <option value="">학과 선택</option>
            {Majors.map((major) => (
              <option key={major.key} value={major.value}>
                {major.value}
              </option>
            ))}
          </select>
        </label>

        <br />
        <button className="buttonsetting loginbutton" onClick={userMyPage}>
          가입
        </button>
      </div>
    </div>
  );
}

export default Join;
