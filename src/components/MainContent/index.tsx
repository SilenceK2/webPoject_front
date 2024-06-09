import { TopSection, BottomSection, MainContentContainer } from "./styles";
import { useNavigate } from "react-router";
import Loading from "../../pages/RouterPages/Loading";
import { useRecoilValue } from "recoil";
import { usernameState } from "../../utils/recoil/atom";
import React from "react";
import WeatherContentBox from "../WeatherContent";
import { loadingStateSelector } from "../../utils/recoil/atom";

const MainContentBox = () => {
  const loadingState = useRecoilValue(loadingStateSelector);
  const username = useRecoilValue(usernameState); //임시방편

  return (
    <>
      <MainContentContainer>
        <TopSection>
          {!loadingState ? <Loading /> : <WeatherContentBox />}
        </TopSection>
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
