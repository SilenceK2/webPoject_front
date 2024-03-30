import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #000;
  color: #ffffff;
`;

const Header = () => {
  return <HeaderContainer>header</HeaderContainer>;
};

export default Header;
