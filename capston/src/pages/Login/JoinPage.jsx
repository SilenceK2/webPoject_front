import React, { useEffect, useState } from "react";
import {
  LoginBoxContainer,
  Title,
  TextBox,
  Input,
  SubmitButton,
  Topsection,
  BottomSection,
} from "../../style/stylecomponents/MemberStyle/JoinStyle";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api/Instance";

const JoinPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpClick = async () => {
    try {
      await api.post(`member/signup`, {
        memberEmail: email,
        meberPassword: password,
      });
      navigate("/login");
      console.log("success");
    } catch (error) {
      console.error("error", error.message);
    }
  };
  console.log(email);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  return (
    <LoginBoxContainer>
      <Topsection>
        <Title>아이디와 비밀번호를 입력해주세요</Title>
      </Topsection>
      <BottomSection>
        <TextBox>
          <Input
            type="text"
            placeholder="이메일을 입력하세요"
            name="username"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="패스워드를 입력하세요"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SubmitButton
            onClick={handleSignUpClick}
            type="submit"
            value="회원가입하기"
          />
        </TextBox>
      </BottomSection>
    </LoginBoxContainer>
  );
};

export default JoinPage;
