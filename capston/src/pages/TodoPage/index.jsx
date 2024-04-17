import {
  TodoContainer,
  TopSection,
  BottomSection,
  RatingContainer,
  RatingTitle,
  RatingContent,
  TodoUpdateList,
  UpdateListTitle,
  UpdateListContent,
  RatingBody,
  RatingBodyTitle,
  RatingBodyContent,
  RatingNumber,
} from "./styles";
import Header from "../../style/stylecomponents/Layout/Header";

const TodoPage = () => {
  return (
    <>
      <Header></Header>
      <TodoContainer>
        <TopSection>
          <RatingContainer>
            <RatingTitle>
              <div>
                실시간 인기 todoList<div>details</div>
              </div>
              <div>인기 todolist를 확인하고 찜해보세요!</div>
            </RatingTitle>
            <RatingContent>
              <RatingBody>
                <RatingBodyTitle>
                  <div>피아노 연습하는 하루</div>
                  <div>#피아노 #예술 #여가</div>
                </RatingBodyTitle>
                <RatingBodyContent>
                  <div>⭐️</div>
                  <div>1,523</div>
                </RatingBodyContent>
              </RatingBody>
              <RatingBody>
                <RatingNumber>
                  <div>1</div>
                  <div></div>
                </RatingNumber>
                <RatingBodyTitle>
                  <div>친구와 떠난 행복한 여행</div>
                  <div>#무인도 #예행 #여가</div>
                </RatingBodyTitle>
                <RatingBodyContent>
                  <div>⭐️</div>
                  <div>1,123</div>
                </RatingBodyContent>
              </RatingBody>
              <RatingBody>
                <RatingBodyTitle>
                  <div>정보처리기사산업실기 시작</div>
                  <div>#정산기 #자격증</div>
                </RatingBodyTitle>
                <RatingBodyContent>
                  <div>⭐️</div>
                  <div>798</div>
                </RatingBodyContent>
              </RatingBody>
            </RatingContent>
          </RatingContainer>
        </TopSection>
        <BottomSection>
          <TodoUpdateList>
            <UpdateListTitle>
              <div>실시간 업데이트</div>
              <div>사람들이 공유한 todolist를 확인해보세요!</div>
            </UpdateListTitle>

            <UpdateListContent></UpdateListContent>
          </TodoUpdateList>
        </BottomSection>
      </TodoContainer>
    </>
  );
};

export default TodoPage;
