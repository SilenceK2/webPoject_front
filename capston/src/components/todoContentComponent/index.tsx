import React, { useEffect, useState } from "react";
import { Container, ContentWrap, TodoTitle, TodoContent } from "./styles";
import { readTodoListApi } from "../../utils/apimodule/todolist";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { todoMainContentListSelector } from "../../utils/recoil/atom";

const TodoContentComponent = () => {
  //   const [dataState, setDataState]: boolean = useState(false);
  const todoListValue: any = useSetRecoilState(todoMainContentListSelector);
  const todoData = async () => {
    try {
      const response: any = await readTodoListApi;
      const todo = response.data;

      todoListValue({
        todoTitle: todo.todoTitle,
        todoContent: todo.todoContent,
        todoTag: todo.todoTag,
        todoCheck: todo.todoCheck,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addTodayTodo = () => {
    todoListValue((prev: any) => ({
      ...prev,
      userCareer: [
        ...prev.userCareer,
        {
          id: prev.userCareer.length + 1,
          carName: "",
          carStartDay: "",
          carEndDay: "",
        },
      ],
    }));
  };

  const addTomorrow = () => {};

  const deleteTodayTodo = () => {};

  const deleteTomorrowTodo = () => {};

  useEffect(() => {
    todoData();
  }, []);
  return (
    <>
      <Container>
        <ContentWrap>
          <TodoTitle>
            <div>Today</div>
            <div>+</div>
          </TodoTitle>
          <TodoContent></TodoContent>
        </ContentWrap>
        <ContentWrap>
          <TodoTitle>
            <div>Tomorrow</div>
            <div>+</div>
          </TodoTitle>
          <TodoContent></TodoContent>
        </ContentWrap>
      </Container>
    </>
  );
};

export default TodoContentComponent;
