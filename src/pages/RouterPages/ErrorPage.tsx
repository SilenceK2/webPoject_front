import styled from "styled-components";
import { RoutePage } from "./styles";
import { useLocation } from "react-router-dom";
import React from "react";

// 스타일 컴포넌트를 함수 외부에서 선언
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #eee;
`;

const MainContainer = styled.div`
  width: 375px;
  height: 100vh;
  background-color: #fff;
  overflow-x: hidden;

  @media (max-width: 575px) {
    width: 100vw;
  }
`;

const ErrorPage = () => {
  const location = useLocation();

  return (
    <>
      <Container>
        <MainContainer>
          <RoutePage>
            <div></div>
            <h3>oops!! 잘못된 접근</h3>
            <p>
              {location.pathname}
              <br />
              경로를 찾을 수 없습니다.
            </p>
          </RoutePage>
        </MainContainer>
      </Container>
    </>
  );
};

export default ErrorPage;
