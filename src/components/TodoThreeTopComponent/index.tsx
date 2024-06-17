import { useRecoilValue, useSetRecoilState } from "recoil";
import { useState } from "react";
import {
  topThreeTodosSelector,
  showModalDataSelector,
} from "../../utils/recoil/atom";
import {
  RatingBody,
  RatingBodyContent,
  RatingBodyTitle,
  RatingContainer,
  RatingContent,
  RatingNumber,
  UpdateListTitle,
  UpdateListTitleContent,
} from "./styles";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../Modal";

const TodoThreeTopComponent = () => {
  const [modalType, setModalType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const topThreeTodos = useRecoilValue(topThreeTodosSelector);
  const modalData = useSetRecoilState(showModalDataSelector);
  const showTodoModal = () => {
    setIsModalOpen(true);
    setModalType("showAllList");
  };

  return (
    <>
      <RatingContainer>
        <UpdateListTitle>
          <div></div>
          <UpdateListTitleContent>
            실시간 인기 todoList
            <div>인기 todolist를 확인하고 찜해보세요!</div>
          </UpdateListTitleContent>
        </UpdateListTitle>
        <RatingContent>
          {topThreeTodos.map((todo: any, index: any) => (
            <RatingBody
              key={todo.id}
              onClick={() => {
                modalData(todo);
                showTodoModal();
              }}
            >
              <RatingNumber>
                <div>{index + 1}</div>
                <div></div>
              </RatingNumber>
              <RatingBodyTitle>
                <div>{todo.todoTitle}</div>
                <div>
                  {todo.todoCategory
                    .split("#")
                    .filter((category: any) => category !== "")
                    .map((category: any, index: any) => (
                      <p key={index}>#{category}</p>
                    ))}
                </div>
              </RatingBodyTitle>
              <RatingBodyContent>
                <div>
                  <FontAwesomeIcon icon={faHeart} color="red" />
                  &nbsp;&nbsp;{todo.todoLike}
                </div>
              </RatingBodyContent>
            </RatingBody>
          ))}
        </RatingContent>
      </RatingContainer>
      {isModalOpen && (
        <Modal
          closeModal={() => setIsModalOpen(false)}
          modalType={"showAllList"}
        />
      )}
    </>
  );
};

export default TodoThreeTopComponent;
