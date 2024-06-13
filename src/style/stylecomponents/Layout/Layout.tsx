import styled from "styled-components";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #eee;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow-x: hidden;
  position: fixed;
  @media (max-width: 575px) {
    width: 100%;
  }
`;

const Layout = () => {
  return (
    <Container>
      <MainContainer>
        <Header></Header>
        <Outlet />
      </MainContainer>
    </Container>
  );
};

export default Layout;
