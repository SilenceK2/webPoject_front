import React from "react";
import {
  LoginBoxContainer,
  Title,
  TextBox,
  Input,
  SubmitButton,
  Topsection,
  BottomSection,
  Paragraph,
} from "../../style/stylecomponents/LoginStyle";
import { useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons"; // 사용할 아이콘 불러오기
import { LinkContainer, Link } from "../../style/stylecomponents/widget/Link";
import axios from "axios";
import { useState } from "react";
const LoginBox = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSignUpClick = async () => {
    navigate("/join");
  };

  const handelLoginClick = async () => {
    try {
      await axios.post(
        `http://localhost:8080/member/login`,
        {
          memberEmail: email,
          memberPassword: pwd,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      navigate("/homepage");
      console.log("success");
    } catch (error) {
      console.error("error", error.message);
    }
  };

  return (
    <LoginBoxContainer>
      <Topsection>
        <Title></Title>
      </Topsection>
      <BottomSection>
        <TextBox>
          <Input
            icon={faUser}
            type="text"
            placeholder="이메일"
            name="username"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="패스워드"
            name="password"
            required
            onChange={(e) => setPwd(e.target.value)}
          />
          <SubmitButton
            type="submit"
            value="로그인"
            onClick={handelLoginClick}
          />
          <Paragraph onClick={handleSignUpClick}></Paragraph>
        </TextBox>
      </BottomSection>
      <LinkContainer>
        <Link>아이디 찾기</Link>
        <Link>비밀번호 찾기</Link>
        <Link onClick={handleSignUpClick}>회원가입</Link>
      </LinkContainer>
    </LoginBoxContainer>
  );
};

export default LoginBox;
