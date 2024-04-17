import React, { useEffect } from "react";
import {
  LoginBoxContainer,
  Title,
  TextBox,
  Input,
  SubmitButton,
  Topsection,
  BottomSection,
  SignupButton,
} from "../../style/stylecomponents/MemberStyle/style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signupVerify, signupUser } from "../../utils/apimodule/member";
const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [successVerify, setSuccessVerify] = useState(false);
  useEffect(() => {
    setEmail("");
    setPwd("");
  }, []);

  const handelSignupClick = async () => {
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

  const handleSignupVerify = async () => {
    try {
      const result = await signupVerify(email);
      if (result.success) {
        setSuccessVerify(true);
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
          >
            {/* {successVerify ? (
              <SignupButton
                type="submit"
                placeholder="이메일 중복확인"
                onClick={handleSignupVerify}
              />
            ) : (
              <>
                <p>✅이메일 인증이 완료되었습니다.</p>
              </>
            )} */}
          </Input>

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
            onClick={handelSignupClick}
          />
        </TextBox>
      </BottomSection>
    </LoginBoxContainer>
  );
};

export default SignupPage;
