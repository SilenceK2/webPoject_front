import React, { useEffect } from "react";
import {
  LoginBoxContainer,
  Title,
  TextBox,
  Input,
  SubmitButton,
  Topsection,
  BottomSection,
} from "../../style/stylecomponents/MemberStyle/style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser, signupUser } from "../../utils/apimodule/member";
const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    setEmail("");
    setPwd("");
  }, []);

  const handelLoginClick = async () => {
    try {
      const result = await signupUser(email, pwd);
      if (result.success) {
        navigate("/login");
        alert("회원가입이 완료되었습니다.");
      } else {
        throw result;
      }
    } catch (error) {
      alert(`실패: ${error.message}`);
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
            type="text"
            placeholder="이메일을 입력하세요"
            name="username"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="패스워드를 입력하세요"
            name="password"
            required
            onChange={(e) => setPwd(e.target.value)}
          />
          <SubmitButton
            type="submit"
            value="회원가입"
            onClick={handelLoginClick}
          />
        </TextBox>
      </BottomSection>
    </LoginBoxContainer>
  );
};

export default SignupPage;
