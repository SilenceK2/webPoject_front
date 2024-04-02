import React, { useEffect } from "react";
import {
  LoginBoxContainer,
  Title,
  TextBox,
  Input,
  SubmitButton,
  Topsection,
  BottomSection,
} from "../../style/stylecomponents/JoinStyle";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { usernameState, userpasswordState } from "../../utils/recoil/atom";
import axios from "axios";

const JoinPage = () => {
  const navigate = useNavigate();
  const setEmail = useSetRecoilState(usernameState);
  const setPassword = useSetRecoilState(userpasswordState);

  const handleSignUpClick = async () => {
    try {
      await axios.post(`http://localhost:8000/member/signup`, {
        email: setEmail,
        password: setPassword,
      });
      navigate("/join");
      console.log("success");
    } catch (error) {
      console.error("error", error.message);
    }
  };

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
