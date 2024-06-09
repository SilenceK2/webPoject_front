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
  margin-top: 30px;
`;
const Loading = () => {
  return (
    <>
      <LoadingPage>
        <BottomSection>
          <MoonLoader color="gray" />
        </BottomSection>
      </LoadingPage>
    </>
  );
};
export default Loading;
