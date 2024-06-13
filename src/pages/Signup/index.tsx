import React from "react";
import {
  LoginBoxContainer,
  TextBox,
  SubmitButton,
  SignupTopsection,
  BottomSection,
  SignupButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signupVerify, signupUser } from "../../utils/apimodule/member";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  usernameState,
  userSignupValueSelector,
} from "../../utils/recoil/atom";
import SignupInput from "../../components/StyleComponents/SignupInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  validateSignupCompare,
  validateSignupEmail,
} from "../../utils/validation/validation";
import { toast } from "react-toastify";
const SignupPage = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd]: any = useState("");
  const [userName, setUserName]: any = useState("");
  const [confirmPassword, setConfirmPassword]: any = useState("");
  const [successVerify, setSuccessVerify] = useState(true);
  const username = useSetRecoilState(usernameState);
  const [signupValue, setSignupValue] = useRecoilState(userSignupValueSelector);

  /**
   * 회원가입 요청 시도
   * @returns
   */
  const handelSignupClick = async () => {
    const { isValid, message }: any = validateSignupCompare(
      userEmail,
      userName,

      userPwd,
      confirmPassword
    );
    if (!isValid) {
      toast.warning(message);
      return;
    }

    try {
      const result: any = await signupUser(signupValue);
      if (result.success) {
        navigate("/user/login");
        username(userName);
        toast.success("회원가입이 완료되었습니다.");
      } else {
        throw new Error("회원가입에 실패했습니다.");
      }
    } catch (error: any) {
      alert(`회원가입 실패: ${error.message}`);
    }
  };

  const handleSignupVerify = async () => {
    /**
     * 중복확인 시 이메일 유효성 검사
     */
    const { isValid, message }: any = validateSignupEmail(userEmail);
    if (!isValid) {
      toast.warning(message);
      return;
    }
    try {
      const result = await signupVerify(userEmail);
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
        <div>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => window.history.back()}
          />
        </div>
        <div>
          <h2>회원가입</h2>
        </div>
      </SignupTopsection>
      <BottomSection>
        <TextBox>
          {successVerify ? (
            <div style={{ marginBottom: "20px" }}>
              <SignupInput
                type="verify"
                placeholder="이메일을 입력하세요"
                name="email"
                onClick={handleSignupVerify}
                setValue={setUserEmail}
                value={userEmail}
              />
            </div>
          ) : (
            <>
              <SignupInput placeholder={userEmail} name="email" disabled />
              <div style={{ marginTop: "-10px", marginBottom: "10px" }}>
                <p>✅ 이메일 인증이 완료되었습니다.</p>
              </div>
            </>
          )}

          <SignupInput
            type="text"
            placeholder="이름을 입력하세요"
            value={userName}
            name="name"
            setValue={setUserName}
          />

          <SignupInput
            type="password"
            placeholder="패스워드를 입력하세요"
            value={userPwd}
            name="password"
            setValue={setUserPwd}
          />
          <SignupInput
            type="password"
            placeholder="패스워드 재확인"
            value={confirmPassword}
            name="confirmpassword"
            setValue={setConfirmPassword}
          />
          {successVerify ? (
            <SubmitButton type="submit" value="회원가입" bgColor="gray" />
          ) : (
            <>
              <SubmitButton
                type="submit"
                value="회원가입"
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
