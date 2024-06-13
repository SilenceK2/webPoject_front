import React from "react";
import { MoonLoader } from "react-spinners";
import styled from "styled-components";

const LoadingPage = styled.div`
  width: 100%;
  maxheight: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TopSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-height: 50px;
  margin-top: -60px;
  font-weight: light;
  & > div {
    text-align: center;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-height: 20px;
  justify-content: center;
  margin-top: 17px;
`;
const Loading = () => {
  return (
    <>
      <LoadingPage>
        <TopSection>
          <div>날씨 데이터를 불러오고 있습니다</div>
        </TopSection>
        <BottomSection>
          <MoonLoader color="#5c8be9" />
        </BottomSection>
      </LoadingPage>
    </>
  );
};
export default Loading;
