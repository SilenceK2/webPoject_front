import React from "react";
import {
  TodoListTitle,
  TodoListTitleContet,
  TodoListBoard,
  Topsection,
  BottomSection,
} from "./styles";

const TodoContentBox = () => {
  return (
    <>
      <Topsection>
        <TodoListTitle>
          <div></div>
          <TodoListTitleContet>
            <div>TodoList를 작성하고 관리해보세요</div>
            <div>나의 오늘 할 일을 정리하고 관리할 수 있습니다</div>
          </TodoListTitleContet>
        </TodoListTitle>
      </Topsection>
      <BottomSection>
        <TodoListBoard />
      </BottomSection>
    </>
  );
};
export default TodoContentBox;
