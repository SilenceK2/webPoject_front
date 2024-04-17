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
  RatingBodyTitletest,
  UpdateContent,
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
                🏆실시간 인기 todoList<div>details</div>
              </div>
              <div>인기 todolist를 확인하고 찜해보세요!</div>
            </RatingTitle>
            <RatingContent>
              <RatingBody>
                <RatingNumber>
                  <div>1</div>
                  <div></div>
                </RatingNumber>
                <RatingBodyTitle>
                  <div>피아노 연습하는 하루</div>
                  <div>
                    <p>#피아노</p> <p>#예술</p> <p>#여가</p>
                  </div>
                </RatingBodyTitle>
                <RatingBodyContent>
                  <div>⭐️1,523</div>
                  <div>@ktg5679</div>
                </RatingBodyContent>
              </RatingBody>
              <RatingBody>
                <RatingNumber>
                  <div>2</div>
                  <div></div>
                </RatingNumber>
                <RatingBodyTitle>
                  <div>친구와 떠난 행복한 여행</div>
                  <div>
                    <p>#무인도</p> <p>#여행</p> <p>#여가</p>
                  </div>
                </RatingBodyTitle>
                <RatingBodyContent>
                  <div>⭐️1,123</div>
                  <div>@hichanmin</div>
                </RatingBodyContent>
              </RatingBody>
              <RatingBody>
                <RatingNumber>
                  <div>3</div>
                  <div></div>
                </RatingNumber>
                <RatingBodyTitle>
                  <div>정보처리기사산업실기 시작</div>
                  <div>
                    <p>#정산기</p> <p>자격증</p>
                  </div>
                </RatingBodyTitle>
                <RatingBodyContent>
                  <div>⭐️798</div>
                  <div>@raebagi</div>
                </RatingBodyContent>
              </RatingBody>
            </RatingContent>
          </RatingContainer>
        </TopSection>
        <BottomSection>
          <TodoUpdateList>
            <UpdateListTitle>
              <div>✅실시간 업데이트</div>
              <div>사람들이 공유한 todolist를 확인해보세요!</div>
            </UpdateListTitle>
            <UpdateListContent>
              <UpdateContent></UpdateContent>
              <UpdateContent></UpdateContent>
              <UpdateContent></UpdateContent>
              <UpdateContent></UpdateContent>
            </UpdateListContent>
          </TodoUpdateList>
        </BottomSection>
      </TodoContainer>
    </>
  );
};

export default TodoPage;
