import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #eee;
`;

const MainContainer = styled.div`
  width: 40vw;
  height: 100vh;
  background-color: #fff;
  overflow-x: hidden;
  position: fixed;
  @media (max-width: 575px) {
    width: 100vw;
  }
`;

const Layout = () => {
  return (
    <Container>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </Container>
  );
};

export default Layout;
