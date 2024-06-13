import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 8%;
  width: 100%;
  background-color: white;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  display: flex;
  justify-content: space-between;
  position: fixed;
  box-sizing: border-box;
  @media (min-width: 1200px) {
    width: 30vw;
  }

  & div:nth-child(1) {
    justify-content: flex-start;
    flex: 0.3;
    background-image: url("/images/menu.svg");
    background-position: center;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  }
  & div:nth-child(2) {
    margin-right: 40px;
    flex-grow: 1;
    text-align: center;
  }
  & div:nth-child(3) {
    justify-content: flex-end;
    flex: 0.3;
    cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (window.confirm("로그아웃하시겠습니까?")) {
      localStorage.removeItem("memberIdNumber");
      window.location.href = "/login";
    }
  };

  return (
    <HeaderContainer>
      <div></div>
      <div></div>
      {/* <div onClick={handleLogout}>user</div> */}
      <div onClick={() => navigate("/mypage")}>user</div>
    </HeaderContainer>
  );
};

export default Header;
