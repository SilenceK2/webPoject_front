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
} from "../style/stylecomponents/LoginStyle";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons"; // 사용할 아이콘 불러오기
import { LinkContainer, Link } from "../style/stylecomponents/Link";

const LoginBox = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/join");
  };

  return (
    <LoginBoxContainer>
      <Topsection>
        <Title>오늘어때?</Title>
      </Topsection>
      <BottomSection>
        <TextBox>
          <Input
            icon={faUser}
            type="text"
            placeholder="이메일"
            name="username"
            required
          />
          <Input
            type="password"
            placeholder="패스워드"
            name="password"
            required
          />
          <SubmitButton type="submit" value="로그인" />
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
