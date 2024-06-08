import { TopSection, BottomSection, MainContentContainer } from "./styles";
import { useNavigate } from "react-router";

import { useRecoilValue } from "recoil";
import { usernameState } from "../../utils/recoil/atom";
import React from "react";

const MainContentBox = () => {
  const username = useRecoilValue(usernameState); //임시방편
  const navigate = useNavigate();
  return (
    <>
      <MainContentContainer>
        <TopSection></TopSection>
        <BottomSection>
          {/* <div onClick={() => navigate("/todopage")}>
            &nbsp;todoList순위와 실시간 업데이트 확인하기
          </div> */}
        </BottomSection>
      </MainContentContainer>
    </>
  );
};

export default MainContentBox;
