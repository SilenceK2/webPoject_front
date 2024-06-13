import {
  LoginBoxContainer,
  Title,
  TextBox,
  SubmitButton,
  Topsection,
  BottomSection,
  LinkContainer,
  Link,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUser } from "../../utils/apimodule/member";
import { useremailState } from "../../utils/recoil/atom";
import { useSetRecoilState } from "recoil";
import SignupInput from "../../components/StyleComponents/SignupInput";
import { toast } from "react-toastify";

const LoginBox = () => {
  const useremail: any = useSetRecoilState(useremailState);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSignUpClick = async () => {
    navigate("/user/signup");
  };

  const handelLoginClick = async () => {
    console.log(email, pwd);
    try {
      const result: any = await loginUser(email, pwd);
      const response = result.data;
      if (result.success) {
        navigate("/home");
        useremail(email);
        toast.success("로그인이 완료되었습니다.");
      } else {
        toast.warning("다시 시도해주세요");
        setEmail(""), setPwd("");
      }
    } catch (error) {
      toast.error(`로그인 실패`);
      setEmail(""), setPwd("");
      console.log(error);
    }
  };

  useEffect(() => {
    setEmail(""), setPwd("");
  }, []);
  return (
    <LoginBoxContainer>
      <Topsection>
        <Title>
          <div>Login</div>
          <div>나의 투두리스트를 작성하고 공유해보세요</div>
        </Title>
      </Topsection>
      <BottomSection>
        <TextBox>
          <div style={{ marginBottom: "0px" }}>
            <SignupInput
              placeholder="이메일을 입력해 주세요"
              setValue={setEmail}
              value={email}
              type="loginInput"
            />
          </div>
          <div style={{ marginBottom: "0px" }}>
            <SignupInput
              type="password"
              placeholder="패스워드"
              setValue={setPwd}
              value={pwd}
            />
          </div>
          <SubmitButton
            type="submit"
            value="로그인"
            onClick={handelLoginClick}
          />
        </TextBox>
      </BottomSection>
      <LinkContainer>
        아직 회원이 아니신가요?
        <Link onClick={handleSignUpClick}>회원가입</Link>
      </LinkContainer>
    </LoginBoxContainer>
  );
};

export default LoginBox;
