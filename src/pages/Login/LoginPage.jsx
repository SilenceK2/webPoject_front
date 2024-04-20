import React, { useEffect } from "react";
import {
  LoginBoxContainer,
  Title,
  TextBox,
  Input,
  SubmitButton,
  Topsection,
  BottomSection,
  Paragraph,
  LoginText
} from "../../style/stylecomponents/MemberStyle/style";
import { useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { LinkContainer, Link } from "../../style/stylecomponents/widget/Link";
import { useState } from "react";
import { loginUser, loginGetMemberId } from "../../utils/apimodule/member";
import { useremailState } from "../../utils/recoil/atom";
import { useSetRecoilState } from "recoil";
const LoginBox = () => {
  const useremail = useSetRecoilState(useremailState);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [memberId, setMemberId] = useState("");

  const handleSignUpClick = async () => {
    navigate("/signup");
  };

  const handelLoginClick = async () => {
    try {
      const result = await loginUser(email, pwd);
      const response = result.data;
      console.log(response);
      if (result.success) {
        navigate("/homepage");
        useremail(email);
        alert("로그인이 완료되었습니다.");
      } else {
        throw result;
      }
    } catch (error) {
      alert(`실패: ${error}`);
      console.log(error);
    }
  };

  return (
    <LoginBoxContainer>
      <Topsection>
        <Title></Title>
        <LoginText>LogIn</LoginText>
      </Topsection>
      <BottomSection>
        <TextBox>
          <Input
            icon={faUser}
            type="text"
            placeholder="이메일"
            name="email"
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
