import React, { useState } from "react";
import {
  ModalBackdrop,
  ModalBottomSection,
  ModalButton,
  ModalContainer,
  ModalInput,
  ModalTopSection,
  ShowModalBottomSection,
  ShowModalContainer,
  ShowModalTopSection,
} from "./styles";

const Modal = ({ closeModal, modalType, todoData }: any) => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [content, setContent] = useState("");
  const [sharedState, setSharedState] = useState(false);

  const createTodoList = () => {
    closeModal();
  };

  const deleteTodoList = () => {
    closeModal();
  };

  const handleBackdropClick: any = (e: any) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  console.log(todoData);

  return (
    <ModalBackdrop
      onClick={modalType === "showtodo" ? handleBackdropClick : null}
    >
      {modalType === "today" || modalType === "tomorrow" ? (
        <ModalContainer>
          <div>
            <p onClick={closeModal}>x</p>
          </div>
          <ModalTopSection>
            <ModalInput
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <ModalInput
              type="text"
              placeholder="#으로 카테고리를 입력하세요"
              value={categories}
              onChange={(e) => {
                setCategories(e.target.value);
              }}
            />
          </ModalTopSection>
          <ModalBottomSection>
            <ModalInput
              type="text"
              placeholder="내용을 입력하세요"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              style={{ height: "50px" }}
            />
            <label>
              <div>
                <input
                  type="checkbox"
                  onChange={() => {
                    setSharedState(true);
                  }}
                />
                <p>공유하기</p>
              </div>
              <span>
                공유하기를 선택하실 경우 다른 사람들이 검색할 수 있습니다.
              </span>
            </label>
            <ModalButton>
              <button onClick={createTodoList}>추가</button>
              {/* <button onClick={updateTodoList}>수정</button> */}
              <button onClick={deleteTodoList}>삭제</button>
            </ModalButton>
          </ModalBottomSection>
        </ModalContainer>
      ) : modalType === "showtodo" ? (
        <ShowModalContainer>
          <ShowModalTopSection>
            <div>
              <h2>{todoData.todoTitle}</h2>
              <p>{todoData.todoCategory}</p>
            </div>
            <div>{todoData.todoContent}</div>
          </ShowModalTopSection>
          <ShowModalBottomSection>{/* 댓글 영역 */}</ShowModalBottomSection>
        </ShowModalContainer>
      ) : null}
    </ModalBackdrop>
  );
};

export default Modal;
