import { TopSection, BottomSection } from "./styles";
import { useEffect, useState } from "react";

const MainContentBox = () => {
  return (
    <>
      <TopSection>
        <div>박찬민님, 오늘 하루 계획을 세워보세요!</div>
        <div>다른 사람들이 작성한 todoList를 구경해보세요</div>
      </TopSection>
      <BottomSection>
        <div></div>
      </BottomSection>
    </>
  );
};

export default MainContentBox;
