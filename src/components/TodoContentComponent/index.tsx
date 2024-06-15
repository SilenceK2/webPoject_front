import React, { useEffect, useState } from "react";
import {
  Container,
  ContentWrap,
  TodoTitle,
  TodoContent,
  TodoBody,
  TodoNumber,
  TodoBodyTitle,
  TodoBodyContent,
  CustomCheckbox,
  TimeSeparator,
} from "./styles";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import {
  todoMainContentListSelector,
  showModalDataSelector,
} from "../../utils/recoil/atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareFromSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import {
  deleteTodoListApi,
  readTodoListApi,
} from "../../utils/apimodule/todolist";
import { toast } from "react-toastify";

const TodoContentComponent = () => {
  const [todoListValue, todoListSet]: any = useRecoilState(
    todoMainContentListSelector
  );
  const { todayTodo = [], tomorrowTodo = [] }: any = useRecoilValue(
    todoMainContentListSelector
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const modalData = useSetRecoilState(showModalDataSelector);

  const sortByTime = (todos: any) => {
    // 배열을 복제하여 정렬
    const sortedTodos = [...todos].sort((a: any, b: any) => {
      const timeA = parseInt(a.todoTime.replace(":", ""));
      const timeB = parseInt(b.todoTime.replace(":", ""));
      return timeA - timeB;
    });
    return sortedTodos;
  };

  const todoData = async () => {
    try {
      const response: any = await readTodoListApi();
      console.log(response.data.today);
      if (response.success) {
        const todayList = Array.isArray(response.data.today)
          ? response.data.today
          : [];
        const tomorrowList = Array.isArray(response.data.tomorrow)
          ? response.data.tomorrow
          : [];

        todoListSet({
          // todayTodo: sortByTime(todayList),
          // tomorrowTodo: sortByTime(tomorrowList),
          todayTodo: todayList,
          tomorrowTodo: tomorrowList,
        });
        console.log(todayList);
      } else {
        console.log("투두리스트 불러오기 실패");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addTodayTodo = () => {
    setModalType("today");
    setIsModalOpen(true);
  };

  const addTomorrowTodo = () => {
    setModalType("tomorrow");
    setIsModalOpen(true);
  };

  const deleteTodayTodo = async (todoId: any) => {
    try {
      if (window.confirm("삭제하시겠습니까?")) {
        const response: any = await deleteTodoListApi(todoId);
        if (response.success) {
          toast.success("투두가 삭제되었습니다.");
          todoListSet((prev: any) => ({
            ...prev,
            todayTodo: prev.todayTodo.filter(
              (today: any) => today.id !== todoId
            ),
          }));
        } else {
          toast.warning("투두 삭제 실패");
        }
      }
    } catch (error) {
      toast.error("오류" + error);
    }
  };

  const deleteTomorrowTodo = async (todoId: any) => {
    try {
      if (window.confirm("삭제하시겠습니까?")) {
        const response: any = await deleteTodoListApi;
        if (response.success) {
          toast.success("투두가 삭제되었습니다.");
          todoListSet((prev: any) => ({
            ...prev,
            tomorrowTodo: prev.tomorrowTodo.filter(
              (tomorrow: any) => tomorrow.id !== todoId
            ),
          }));
        } else {
          toast.warning("투두 삭제 실패");
        }
      }
    } catch (error) {
      toast.error("오류" + error);
    }
  };

  const showTodoModal = () => {
    setIsModalOpen(true);
    setModalType("showtodo");
  };

  useEffect(() => {
    todoData();
  }, []);

  return (
    <Container>
      <ContentWrap>
        <TodoTitle>
          <div onClick={todoData}>Today</div>
          <div onClick={addTodayTodo}>+</div>
        </TodoTitle>
        <TodoContent>
          {todayTodo.map((todo: any, index: any) => (
            <React.Fragment key={todo.id}>
              {index === 0 ||
              todayTodo[index - 1].todoTime !== todo.todoTime ? (
                <TimeSeparator>{todo.todoTime}</TimeSeparator>
              ) : null}
              <TodoBody>
                <TodoNumber>
                  <CustomCheckbox />
                </TodoNumber>
                <TodoBodyTitle
                  onClick={() => {
                    modalData(todo);
                    showTodoModal();
                  }}
                >
                  <div>{todo.todoTitle}</div>
                  <div>
                    {todo.todoCategory
                      .split("#")
                      .filter((tag: any) => tag !== "")
                      .map((tag: any, index: any) => (
                        <p key={index}>#{tag}</p>
                      ))}
                  </div>
                </TodoBodyTitle>
                <TodoBodyContent>
                  <div>
                    <FontAwesomeIcon icon={faShareFromSquare} />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      onClick={() => deleteTodayTodo(todo.id)}
                    />
                  </div>
                </TodoBodyContent>
              </TodoBody>
            </React.Fragment>
          ))}
        </TodoContent>
      </ContentWrap>
      <ContentWrap>
        <TodoTitle>
          <div>Tomorrow</div>
          <div onClick={addTomorrowTodo}>+</div>
        </TodoTitle>
        <TodoContent>
          {tomorrowTodo.map((todo: any, index: any) => (
            <React.Fragment key={todo.id}>
              {index === 0 ||
              tomorrowTodo[index - 1].todoTime !== todo.todoTime ? (
                <TimeSeparator>{todo.todoTime}</TimeSeparator> // 변경: 구분선으로 사용할 컴포넌트 사용
              ) : null}
              <TodoBody>
                <TodoNumber>
                  <CustomCheckbox />
                </TodoNumber>
                <TodoBodyTitle
                  onClick={() => {
                    modalData(todo);
                    showTodoModal();
                  }}
                >
                  <div>{todo.todoTitle}</div>
                  <div>
                    {todo.todoCategory
                      .split("#")
                      .filter((tag: any) => tag !== "")
                      .map((tag: any, index: any) => (
                        <p key={index}>#{tag}</p>
                      ))}
                  </div>
                </TodoBodyTitle>
                <TodoBodyContent>
                  <div>
                    <FontAwesomeIcon icon={faShareFromSquare} />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      onClick={() => deleteTomorrowTodo(todo.id)}
                    />
                  </div>
                </TodoBodyContent>
              </TodoBody>
            </React.Fragment>
          ))}
        </TodoContent>
      </ContentWrap>
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)} modalType={modalType} />
      )}
    </Container>
  );
};

export default TodoContentComponent;
