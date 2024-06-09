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

const TodoContentComponent = () => {
  const dummyTodayTodo = [
    {
      id: 1,
      todoTitle: "Dummy Todo 1",
      todoTag: "#tag1#origin#oracle",
      todoContent: "This is a dummy todo content 1.",
      todoCheck: false,
      todoCategory: "#work#personal",
      todoLikes: 10,
      todoEmail: "dummy1@example.com",
    },
    {
      id: 2,
      todoTitle: "Dummy Todo 2",
      todoTag: "#tag2",
      todoContent: "This is a dummy todo content 2.",
      todoCheck: false,
      todoCategory: "#work",
      todoLikes: 5,
      todoEmail: "dummy2@example.com",
    },
  ];

  const dummyTomorrowTodo = [
    {
      id: 1,
      todoTitle: "Dummy TomorrowTodo 1",
      todoTag: "#tag1",
      todoContent: "This is a dummy todo content 1.",
      todoCheck: false,
      todoCategory: "#personal",
      todoLikes: 3,
      todoEmail: "dummy1@example.com",
    },
  ];

  const todoListSet: any = useSetRecoilState(todoMainContentListSelector);
  const { todayTodo = [], tomorrowTodo = [] }: any = useRecoilValue(
    todoMainContentListSelector
  );

  const todoData = async () => {
    try {
      todoListSet({
        todayTodo: dummyTodayTodo,
        tomorrowTodo: dummyTomorrowTodo,
      });
    } catch (error) {
      console.log(error);
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

  const deleteTodayTodo = (todoId: any) => {
    todoListSet((prev: any) => ({
      ...prev,
      todayTodo: prev.todayTodo.filter((today: any) => today.id !== todoId),
    }));
  };

  const deleteTomorrowTodo = (todoId: any) => {
    todoListSet((prev: any) => ({
      ...prev,
      tomorrowTodo: prev.tomorrowTodo.filter(
        (tomorrow: any) => tomorrow.id !== todoId
      ),
    }));
  };

  const sendKaKaoMessage = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "title",
        description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",

        link: {
          mobileWebUrl: document.location.href,
          webUrl: document.location.href,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: document.location.href,
            webUrl: document.location.href,
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: document.location.href,
            webUrl: document.location.href,
          },
        },
      ],
    });
  };

  useEffect(() => {
    todoData();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  return (
    <Container>
      <ContentWrap>
        <TodoTitle>
          <div>Today</div>
          <div onClick={addTodayTodo}>+</div>
        </TodoTitle>
        <TodoContent>
          {todayTodo.map((todo: any, index: any) => (
            <TodoBody key={todo.id}>
              <TodoNumber>
                <CustomCheckbox />
              </TodoNumber>
              <TodoBodyTitle>
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
                    onClick={() => {
                      deleteTodayTodo(todo.id);
                    }}
                  />
                </div>
              </TodoBodyContent>
            </TodoBody>
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
            <TodoBody key={todo.id}>
              <TodoNumber>
                <CustomCheckbox />
              </TodoNumber>
              <TodoBodyTitle>
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
                  <FontAwesomeIcon
                    icon={faShareFromSquare}
                    onClick={sendKaKaoMessage}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={() => {
                      deleteTomorrowTodo(todo.id);
                    }}
                  />
                </div>
              </TodoBodyContent>
            </TodoBody>
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
