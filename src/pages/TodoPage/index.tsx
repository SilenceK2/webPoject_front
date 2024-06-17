import { TodoContainer, TopSection, BottomSection } from "./styles";
import { useEffect, useState } from "react";
import { getTodoListAllTableApi } from "../../utils/apimodule/todolist";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  LastestUpdateSelector,
  showModalDataSelector,
  topThreeTodosSelector,
} from "../../utils/recoil/atom";
import TodoUpdateListComponents from "../../components/TodoUpdateListComponent";
import TodoThreeTopComponent from "../../components/TodoThreeTopComponent";
const TodoPage = () => {
  const setLatestUpdates: any = useSetRecoilState(LastestUpdateSelector);
  const setTopThreeTodos: any = useSetRecoilState(topThreeTodosSelector);

  const isModal = useRecoilValue(showModalDataSelector);

  useEffect(() => {
    const fetchTopThreeTodos = async () => {
      try {
        const response = await getTodoListAllTableApi();
        if (response && response.success) {
          const sortedData = response.data.data.sort(
            (a: any, b: any) => b.todoLikes - a.todoLikes
          );
          const topThree = sortedData.slice(0, 3);
          setTopThreeTodos(topThree);
          return topThree;
        } else {
          console.log("상위 3개 가져오기 실패");
          return [];
        }
      } catch (error) {
        console.error("fetching error:", error);
        return [];
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
      <TodoContainer>
        <TopSection>
          <TodoThreeTopComponent />
        </TopSection>
        <BottomSection>
          <TodoUpdateListComponents />
        </BottomSection>
      </TodoContainer>
    </>
  );
};
export default TodoPage;
