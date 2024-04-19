import { TopSection, BottomSection, MainContentContainer } from "./styles";
import { useNavigate } from "react-router";
import { useremailState } from "../../utils/recoil/atom";
import { useRecoilValue } from "recoil";

const MainContentBox = () => {
  const useremail = useRecoilValue(useremailState);
  const navigate = useNavigate();
  return (
    <>
      <MainContentContainer>
        <TopSection>
          <div>{useremail}님, 오늘 하루 계획을 세워보세요!</div>
          <div>다른 사람들이 작성한 todoList를 구경해보세요</div>
        </TopSection>
        <BottomSection>
          {" "}
          <div onClick={() => navigate("/todopage")}>
            📌todoList순위와 실시간 업데이트 확인하기
          </div>
        </BottomSection>
      </MainContentContainer>
    </>
  );
};

export default MainContentBox;
