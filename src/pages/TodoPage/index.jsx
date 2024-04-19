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
import { getTodoListAllTableApi } from "../../utils/apimodule/todolist";

const TodoPage = () => {
  const [topThreeTodos, setTopThreeTodos] = useState([]);
  const [latestUpdates, setLatestUpdates] = useState([]);

  useEffect(() => {
    const fetchTopThreeTodos = async () => {
      try {
        const response = await getTodoListAllTableApi();
        if (response.success) {
          const sortedTodos = response.data.sort(
            (a, b) => b.todo_like - a.todo_like
          );
          const topThree = sortedTodos.slice(0, 3);
          setTopThreeTodos(topThree);
        } else {
          console.log("Failed to fetch todo list");
        }
      } catch (error) {
        console.error("Error fetching todo list:", error);
      }
    };

    const fetchLatestUpdates = async () => {
      try {
        const response = await getTodoListAllTableApi(); // Assuming this API also returns latest updates
        if (response.success) {
          const sortedUpdates = response.data.sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
          );
          const latestFive = sortedUpdates.slice(0, 5);
          setLatestUpdates(latestFive);
        } else {
          console.log("Failed to fetch latest updates");
        }
      } catch (error) {
        console.error("Error fetching latest updates:", error);
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
                    <div>{todo.todo_title}</div>
                    <div>
                      <p>#{todo.todo_category}</p>
                    </div>
                  </RatingBodyTitle>
                  <RatingBodyContent>
                    <div>⭐️&nbsp;&nbsp;{todo.todo_like}</div>
                    <div>@{todo.todo_email}</div>
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
                  <UpdateContentTitle>{update.todo_title}</UpdateContentTitle>
                  <UpdateContentContent>
                    <div>
                      <p>#{update.todo_category}</p>
                    </div>
                    <div>{update.todo_description}</div>
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
