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
  UpdateContent,
  UpdateContentContent,
  UpdateContentTitle,
  UpdateListTitleContent,
} from "./styles";
import Header from "../../style/stylecomponents/Layout/Header";
import { useEffect, useState } from "react";
import {
  getRatingTodoListApi,
  getTodoListAllTableApi,
} from "../../utils/apimodule/todolist";
const TodoPage = () => {
  const [topThreeTodos, setTopThreeTodos] = useState([]);
  const [latestUpdates, setLatestUpdates] = useState([]);

  useEffect(() => {
    const fetchTopThreeTodos = async () => {
      try {
        const response = await getTodoListAllTableApi();
        if (response && response.success) {
          const sortedData = response.data.data.sort(
            (a, b) => b.todoLikes - a.todoLikes
          ); // todoLike 기준으로 내림차순 정렬
          const topThree = sortedData.slice(0, 3);
          setTopThreeTodos(topThree);
          return topThree;
        } else {
          console.log("상위 3개 가져오기 실패");
          return []; // 실패 시 빈 배열 반환
        }
      } catch (error) {
        console.error("fetching error:", error);
        return []; // 에러 발생 시 빈 배열 반환
      }
    };
    const fetchLatestUpdates = async () => {
      try {
        const response = await getTodoListAllTableApi();
        if (response && response.success && response.data.data) {
          const latestFive = response.data.data.slice(0, 5);
          setLatestUpdates(latestFive);
        } else {
          console.log("최신 업데이트 불러오기 실패");
        }
      } catch (error) {
        console.error("fetching error:", error);
      }
    };

    fetchTopThreeTodos();
    fetchLatestUpdates();
  }, []);

  return (
    <>
      <Header></Header>
      <TodoContainer>
        <TopSection>
          <RatingContainer>
            <UpdateListTitle>
              <div>🏆</div>
              <UpdateListTitleContent>
                실시간 인기 todoList
                <div>인기 todolist를 확인하고 찜해보세요!</div>
              </UpdateListTitleContent>
            </UpdateListTitle>
            <RatingContent>
              {topThreeTodos.map((todo, index) => (
                <RatingBody key={todo.id}>
                  <RatingNumber>
                    <div>{index + 1}</div>
                    <div></div>
                  </RatingNumber>
                  <RatingBodyTitle>
                    <div>{todo.todoTitle}</div>
                    <div>
                      <p>#{todo.todoCategory}</p>
                      <p>#word</p>
                      <p>#enter</p>
                    </div>
                  </RatingBodyTitle>
                  <RatingBodyContent>
                    <div>⭐️&nbsp;&nbsp;{todo.todoLikes}</div>
                    <div>@{todo.todoEmail}</div>
                  </RatingBodyContent>
                </RatingBody>
              ))}
            </RatingContent>
          </RatingContainer>
        </TopSection>
        <BottomSection>
          <TodoUpdateList>
            <UpdateListTitle>
              <div>✅</div>
              <UpdateListTitleContent>
                실시간 업데이트
                <div>사람들이 공유한 todolist를 확인해보세요!</div>
              </UpdateListTitleContent>
            </UpdateListTitle>
            <UpdateListContent>
              {latestUpdates.map((update, index) => (
                <UpdateContent key={update.id}>
                  <UpdateContentTitle>{update.todoTitle}</UpdateContentTitle>
                  <UpdateContentContent>
                    <div>
                      <p>#{update.todoCategory}</p>
                      <p>#enter</p>
                      <p>#tae</p>
                    </div>
                    <div>{update.todoContent}</div>
                  </UpdateContentContent>
                </UpdateContent>
              ))}
            </UpdateListContent>
          </TodoUpdateList>
        </BottomSection>
      </TodoContainer>
    </>
  );
};
export default TodoPage;

{
  /* <RatingBody>
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
                  <div>⭐️&nbsp;&nbsp;1,523</div>
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
                  <div>⭐️&nbsp;&nbsp;1,123</div>
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
                  <div>⭐️&nbsp;&nbsp;798</div>
                  <div>@raebagi</div>
                </RatingBodyContent>
              </RatingBody> */
}
