import React from "react";
import {
  LoginBoxContainer,
  TextBox,
  Input,
  SubmitButton,
  SignupTopsection,
  BottomSection,
  SignupButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signupVerify, signupUser } from "../../utils/apimodule/member";
import { useSetRecoilState } from "recoil";
import { usernameState } from "../../utils/recoil/atom";
import SignupInput from "../../components/StyleComponents/SignupInput";
const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successVerify, setSuccessVerify] = useState(true);
  const [name, setName] = useState("");
  const username = useSetRecoilState(usernameState);

  const handelSignupClick = async () => {
    if (!email || !pwd || !confirmPassword) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    if (pwd !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const result = await signupUser(email, pwd, name);
      if (result.success) {
        navigate("/login");
        username(name);
        alert("회원가입이 완료되었습니다.");
      } else {
        throw new Error("회원가입에 실패했습니다.");
      }
    } catch (error: any) {
      alert(`회원가입 실패: ${error.message}`);
    }
  };

  const handleSignupVerify = async () => {
    try {
      const result = await signupVerify(email);
      if (result.success) {
        setSuccessVerify(false);
      } else {
        throw result;
      }
    } catch (error: any) {
      alert(`실패: ${error.message}`);
    }
  };

  return (
    <LoginBoxContainer>
      <SignupTopsection>
        <div>회원가입</div>
      </SignupTopsection>
      <BottomSection>
        <TextBox>
          {successVerify ? (
            <>
              <SignupInput
                type="verify"
                placeholder="이메일을 입력하세요"
                name="email"
              />
            </>
          ) : (
            <>
              <SignupInput placeholder={email} name="email" disabled />
              <div>
                <p>✅이메일 인증이 완료되었습니다.</p>
              </div>
            </>
          )}

          <SignupInput
            type="text"
            placeholder="이름을 입력하세요"
            name="name"
          />

          <SignupInput
            type="password"
            placeholder="패스워드를 입력하세요"
            name="password"
          />
          <SignupInput
            type="password"
            placeholder="패스워드 재확인"
            name="confirmpassword"
          />
          {successVerify ? (
            <SubmitButton type="submit" value="회원가입" bgColor="gray" />
          ) : (
            <>
              <SubmitButton
                type="submit"
                value="회원가입"
                bgColor={"#0056b3"}
                onClick={handelSignupClick}
              />
            </>
          )}
        </TextBox>
      </BottomSection>
    </LoginBoxContainer>
  );
};

export default SignupPage;
