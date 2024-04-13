import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  flex-basis: 100px;
`;

const Header = () => {
  return <HeaderContainer></HeaderContainer>;
};

export default Header;
