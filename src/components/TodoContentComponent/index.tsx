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
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  todoMainContentListSelector,
  useremailState,
} from "../../utils/recoil/atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareFromSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import { deleteTodoListApi } from "../../utils/apimodule/todolist";
import { toast } from "react-toastify";

const TodoContentComponent = () => {
  const dummyTodayTodo: any = [
    {
      id: 1,
      todoTitle: "자기전에 양치하기",
      todoTag: "#tag1#origin#oracle",
      todoContent: "This is a dummy todo content 1.",
      todoCheck: false,
      todoCategory: "#work#personal",
      todoLikes: 10,
      todoEmail: "dummy1@example.com",
      todoTime: "08:00",
      comment: [
        {
          id: 1,
          commentContent: "sae1afe",
          memberEmail: "ktg5679",
        },
        {
          id: 2,
          commentContent: "sa2afe",
          memberEmail: "qkrfogusqudtls",
        },
        {
          id: 3,
          commentContent: "saefs3e",
          memberEmail: "qkrcksalskEHdrh",
        },
      ],
    },
    {
      id: 2,
      todoTitle: "일어나서 코딩하기",
      todoTag: "#tag2",
      todoContent: "This is a dummy todo content 2.",
      todoCheck: false,
      todoCategory: "#work",
      todoLikes: 5,
      todoEmail: "dummy2@example.com",
      todoTime: "09:00",
      comment: [],
    },
  ];

  const dummyTomorrowTodo: any = [
    {
      id: 1,
      todoTitle: "오늘은 무엇을 해볼까",
      todoTag: "#tag1",
      todoContent: "This is a dummy todo content 1.",
      todoCheck: false,
      todoCategory: "#personal",
      todoLikes: 3,
      todoEmail: "dummy1@example.com",
      todoTime: "10:00",
      comment: [],
    },
  ];

  const todoListSet: any = useSetRecoilState(todoMainContentListSelector);
  const { todayTodo = [], tomorrowTodo = [] }: any = useRecoilValue(
    todoMainContentListSelector
  );

  const sortByTime = (todos: any) => {
    // 배열을 복제하여 정렬
    const sortedTodos = [...todos].sort((a: any, b: any) => {
      const timeA = parseInt(a.todoTime.replace(":", ""));
      const timeB = parseInt(b.todoTime.replace(":", ""));
      return timeA - timeB;
    });
    return sortedTodos;
  };

  const todoData = () => {
    todoListSet({
      todayTodo: sortByTime(dummyTodayTodo),
      tomorrowTodo: sortByTime(dummyTomorrowTodo),
    });
  };

  useEffect(() => {
    todoData();
  }, []);

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
        const response: any = await deleteTodoListApi;
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);

  const showTodoModal = (todo: any) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
    setModalType("showtodo");
  };

  return (
    <Container>
      <ContentWrap>
        <TodoTitle>
          <div>Today</div>
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
                <TodoBodyTitle onClick={() => showTodoModal(todo)}>
                  <div>{todo.todoTitle}</div>
                  <div>
                    {todo.todoTag
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
                <TodoBodyTitle onClick={() => showTodoModal(todo)}>
                  <div>{todo.todoTitle}</div>
                  <div>
                    {todo.todoTag
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
        <Modal
          closeModal={() => setIsModalOpen(false)}
          modalType={modalType}
          todoData={selectedTodo}
        />
      )}
    </Container>
  );
};

export default TodoContentComponent;
