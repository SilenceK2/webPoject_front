import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  .scroll::-webkit-scrollbar {
    display: none;
  }
  .scroll {
    overflow: hidden;
  }
`;

const MainContainer = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #fff;
  overflow-x: hidden;

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
