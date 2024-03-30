import React, { useEffect } from "react";
import {
  LoginBoxContainer,
  Title,
  TextBox,
  Input,
  SubmitButton,
  Topsection,
  BottomSection,
} from "../style/stylecomponents/JoinStyle";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { usernameState, userpasswordState } from "../utils/recoil/atom";

const JoinPage = () => {
  const navigate = useNavigate();
  const setUsername = useSetRecoilState(usernameState);
  const setPassword = useSetRecoilState(userpasswordState);

  const handleSignUpClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    setUsername("");
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
            onChange={(e) => setUsername(e.target.value)}
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
