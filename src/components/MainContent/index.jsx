import { TopSection, BottomSection } from "./styles";
import { useNavigate } from "react-router";
import { useremailState } from "../../utils/recoil/atom";
import { useRecoilValue } from "recoil";

const MainContentBox = () => {
  const useremail = useRecoilValue(useremailState);
  const navigate = useNavigate();
  return (
    <>
      <TopSection>
        <div>{useremail}님, 오늘 하루 계획을 세워보세요!</div>
        <div onClick={() => navigate("/todopage")}>
          다른 사람들이 작성한 todoList를 구경해보세요
        </div>
      </TopSection>
      <BottomSection></BottomSection>
    </>
  );
};

export default MainContentBox;
