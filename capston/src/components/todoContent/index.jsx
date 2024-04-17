import React from "react";
import {
  TodoListTitle,
  TodoListTitleContet,
  TodoListBoard,
  Topsection,
  BottomSection,
} from "./styles";

import { useState } from "react";
import {
  createTodoList,
  deleteTodoList,
  updateTodoList,
} from "../../utils/apimodule/todolist";

const TodoContentBox = () => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handelPostClick = async () => {
    try {
      const result = await createTodoList(title, content);
      if (result.success) {
        alert("글 작성이 완료되었습니다.");
      } else {
        throw result;
      }
    } catch (error) {
      alert(`실패: ${error.message}`);
    }
  };

  const createTodoDataTitle = (e) => {
    setTitle(e.target.value);
  };
  const createTodoDataContent = (e) => {
    setContent(e.target.value);
  };
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
        <TodoListBoard>
          {/* <input
            type="text"
            onChange={createTodoDataTitle}
            placeholder="제목"
          ></input>
          <input
            type="text"
            onChange={createTodoDataContent}
            placeholder="내용"
          ></input>
          <button type="submit" onClick={handelPostClick}>
            추가
          </button> */}
        </TodoListBoard>
      </BottomSection>
    </>
  );
};
export default TodoContentBox;
