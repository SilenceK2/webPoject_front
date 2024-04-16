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
  Content,
} from "./styles";
import Header from "../../style/stylecomponents/Layout/Header";
import { useEffect, useState } from "react";

const TodoPage = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Header></Header>
      <TodoContainer>
        <TopSection>
          <RatingContainer>
            <RatingTitle>
              <div>🏆 실시간 인기 todoList</div>
            </RatingTitle>
            <RatingContent>
              <div>
                <br></br>
                <br></br>
                <br></br>
              </div>
              <div>
                <br></br>
                <br></br>
                <br></br>
              </div>
              <div>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </RatingContent>
          </RatingContainer>
        </TopSection>
        <BottomSection>
          <TodoUpdateList>
            <UpdateListTitle>
              <div>🟢 실시간 업데이트</div>
            </UpdateListTitle>
            <Content>
              <UpdateListContent></UpdateListContent>
            </Content>
          </TodoUpdateList>
        </BottomSection>
      </TodoContainer>
    </>
  );
};

export default TodoPage;
