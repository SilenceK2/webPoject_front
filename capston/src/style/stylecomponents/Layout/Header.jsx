import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 8%;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  display: flex;
  justify-content: space-between;
  position: fixed;
  & div:nth-child(1) {
    margin-left: -55px;
    justify-content: flex-start;
    flex: 1;
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
    margin-right: 40px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div></div>
      <div></div>
      <div>user</div>
    </HeaderContainer>
  );
};

export default Header;
