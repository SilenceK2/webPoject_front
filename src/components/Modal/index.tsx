import React, { useState } from "react";
import {
  ModalBackdrop,
  ModalBottomSection,
  ModalButton,
  ModalContainer,
  ModalInput,
  ModalTopSection,
} from "./styles";

const Modal = ({ closeModal, modalType }: any) => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [content, setContent] = useState("");
  const [sharedState, setSharedState] = useState(false);

  const createTodoList = () => {
    closeModal();
  };

  const updateTodoList = () => {
    closeModal();
  };

  const deleteTodoList = () => {
    closeModal();
  };

  return (
    <>
      <ModalBackdrop>
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
              <button onClick={updateTodoList}>수정</button>
              <button onClick={deleteTodoList}>삭제</button>
            </ModalButton>
          </ModalBottomSection>
        </ModalContainer>
      </ModalBackdrop>
    </>
  );
};

export default Modal;
