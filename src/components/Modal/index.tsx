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
  CommentContainer,
  CommentContent,
  CommentHeader,
  SearchModalContainer,
  SearchModalBottomSection,
  SearchModalTopSection,
} from "./styles";
import { createTodoListApi } from "../../utils/apimodule/todolist";
import { toast } from "react-toastify";
import { searchSuccessSelector } from "../../utils/recoil/atom";
import { RecoilValue, useRecoilValue } from "recoil";
interface ModalProps {
  closeModal: any;
  modalType: any;
  todoData?: any;
  createTodo?: any;
}

const Modal: React.FC<ModalProps> = ({
  closeModal,
  modalType,
  todoData,
  createTodo,
}) => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [content, setContent] = useState("");
  const [sharedState, setSharedState] = useState(false);
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");
  const searchData = useRecoilValue(searchSuccessSelector);

  const handleCreateTodo = async () => {
    try {
      const memberId = localStorage.getItem("memberId");
      const response: any = await createTodoListApi(
        title,
        content,
        time,
        memberId
      );

      /**
       * @todo 유효성검사 완성시켜야함 ( 글자수 제한, Date 시간만 입력혹은 min, max시간 설정 )
       */

      if (response.success === "true") {
        toast.success("글 작성이 완료되었습니다.");
      } else {
        toast.error("글 작성이 실패하였습니다.");
      }
    } catch (error) {
      toast.error("글 작성이 실패하였습니다 : " + error);
    }
    closeModal();
  };

  const handleBackdropClick: any = (e: any) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const StyledComment: any = ({ comment, index }: any) => (
    <CommentContainer key={index}>
      <CommentHeader>@{comment.memberEmail}</CommentHeader>
      <CommentContent>{comment.commentContent}</CommentContent>
    </CommentContainer>
  );

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
              onChange={(e) => setCategories(e.target.value)}
            />
            <ModalInput
              type="time"
              step={3600}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </ModalTopSection>
          <ModalBottomSection>
            <ModalInput
              type="text"
              placeholder="내용을 입력하세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
              <button onClick={handleCreateTodo}>추가</button>
            </ModalButton>
          </ModalBottomSection>
        </ModalContainer>
      ) : modalType === "showtodo" ? (
        <ShowModalContainer>
          <ShowModalTopSection>
            <div>
              <h2>{todoData.todoTitle}</h2>
              <p>{todoData.todoTime}</p>
            </div>
            <div>
              {todoData.todoCategory
                .split("#")
                .filter((category: any) => category !== "")
                .map((category: any, index: any) => (
                  <p key={index}>#{category}</p>
                ))}
            </div>
            <div>{todoData.todoContent}</div>
          </ShowModalTopSection>
          <ShowModalBottomSection>
            {todoData.comment.map((comment: any, index: any) => (
              <StyledComment key={index} comment={comment} index={index} />
            ))}
          </ShowModalBottomSection>
        </ShowModalContainer>
      ) : modalType === "searchResult" ? (
        <SearchModalContainer>
          <div>
            <p onClick={closeModal}>x</p>
          </div>
          <SearchModalTopSection>
            <div>
              asef
              <p>12</p>
            </div>

            <div>asfe</div>
            <div>seaf</div>
            <div>asfe</div>
          </SearchModalTopSection>
          <SearchModalBottomSection>
            {/* <input
              value={comment}
              onChange={(e: any) => {
                setComment(e.target.value);
              }}
              type="text"
            /> */}
            <div>
              <ModalButton>
                <button onClick={handleCreateTodo}>추가</button>
              </ModalButton>
            </div>
          </SearchModalBottomSection>
        </SearchModalContainer>
      ) : null}
    </ModalBackdrop>
  );
};

export default Modal;
