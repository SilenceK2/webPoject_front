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
  ShowModalTitle,
} from "./styles";
import {
  createTodoListApi,
  updateTodoListApi,
} from "../../utils/apimodule/todolist";
import { toast } from "react-toastify";
import { searchSuccessSelector } from "../../utils/recoil/atom";
import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { createCommentApi } from "../../utils/apimodule/todolist";

interface ModalProps {
  closeModal: () => void;
  modalType: string;
  todoData?: any;
  createTodo?: () => void;
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
  const [editShowModalState, setEditShowModalState] = useState(false);
  const searchData: any = useRecoilValue(searchSuccessSelector);

  const handleCreateTodo = async () => {
    try {
      const response: any = await createTodoListApi(title, content, time);

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

  const sendCommentTodo = async () => {
    try {
      const response = await createCommentApi(comment);
      if (response.success) {
        handleBackdropClick();
        toast.success("댓글 작성이 완료되었습니다.");
      } else {
        toast.warning("댓글 작성이 실패하였습니다.");
      }
    } catch (error) {
      toast.error("서버가 연결되지 않았습니다.");
    }
  };

  const sendEditTodo = async () => {
    try {
      const response: any = await updateTodoListApi(
        title,
        time,
        content,
        categories
      );
      if (response.success === "true") {
        toast.success("수정이 완료되었습니다.");
      } else {
        toast.warning("수정이 실패하였습니다.");
      }
    } catch (error) {
      console.log("오류" + error);
    }
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
    <>
      {(modalType === "today" ||
        modalType === "tomorrow" ||
        modalType === "showtodo") && (
        <ModalBackdrop onClick={handleBackdropClick}>
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
                      onChange={() => setSharedState(!sharedState)}
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
              {!editShowModalState ? (
                <>
                  <ShowModalTopSection>
                    <ShowModalTitle>
                      <div>
                        <h2>{todoData.todoTitle}</h2>

                        <div>
                          <p>{todoData.todoLikes}</p>
                          <FontAwesomeIcon
                            icon={faHeart}
                            style={{ marginLeft: "10px", color: "red" }}
                          />
                        </div>
                      </div>
                      <div>
                        {todoData.todoTime}{" "}
                        <div
                          onClick={() => {
                            setEditShowModalState(true);
                          }}
                        >
                          수정하기
                        </div>
                      </div>
                    </ShowModalTitle>
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
                      <StyledComment
                        key={index}
                        comment={comment}
                        index={index}
                      />
                    ))}
                  </ShowModalBottomSection>
                </>
              ) : (
                <>
                  {" 내 투두리스트 수정 모드 "}
                  <ShowModalTopSection>
                    <ShowModalTitle>
                      <div>
                        <input
                          value={title}
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          style={{
                            width: "60%",
                            paddingTop: "10px",
                            outline: "none",
                            border: "none",
                            paddingLeft: "10px",
                            fontSize: "20px",
                          }}
                          placeholder={
                            title.length > 0 ? title : "제목을 입력해주세요"
                          }
                        />

                        <div>
                          <p>{todoData.todoLikes}</p>
                          <FontAwesomeIcon
                            icon={faHeart}
                            style={{ marginLeft: "10px", color: "red" }}
                          />
                        </div>
                      </div>
                      <div>
                        <ModalInput
                          type="time"
                          style={{
                            marginTop: "20px",
                            width: "30%",
                            paddingLeft: "20px",
                            padding: "10px",
                            outline: "none",
                            border: "none",
                          }}
                          step={3600}
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          required
                        />
                        <div
                          onClick={() => {
                            sendEditTodo;
                          }}
                        >
                          수정완료
                        </div>
                      </div>
                    </ShowModalTitle>
                    <input
                      style={{
                        border: "none",
                        padding: "15px",
                        outline: "none",
                        fontSize: "15px",
                        paddingBottom: "20px",
                        paddingTop: "20px",
                      }}
                      placeholder="카테고리를 입력해주세요"
                    />
                    <input
                      style={{
                        border: "none",
                        backgroundColor: " #f9f9f9",
                        paddingTop: "30px",
                        paddingBottom: "30px",
                        paddingLeft: "20px",
                        borderRadius: "10px",
                        outline: "none",
                        fontSize: "15px",
                        marginTop: "10px",
                      }}
                      placeholder="본문을 입력해주세요"
                    />
                  </ShowModalTopSection>
                  <ShowModalBottomSection>
                    {todoData.comment.map((comment: any, index: any) => (
                      <StyledComment
                        key={index}
                        comment={comment}
                        index={index}
                      />
                    ))}
                  </ShowModalBottomSection>
                </>
              )}
            </ShowModalContainer>
          ) : null}
        </ModalBackdrop>
      )}
      {modalType === "searchResult" && (
        <ModalBackdrop>
          <ShowModalContainer>
            <ShowModalTopSection>
              <ShowModalTitle>
                <div>
                  <h2>{searchData.todoTitle}</h2>

                  <div>
                    <p>{searchData.todoLikes}</p>
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ marginLeft: "10px", color: "red" }}
                    />
                  </div>
                </div>
                <div>
                  {searchData.todoTime}
                  <div
                    onClick={() => {
                      setEditShowModalState(true);
                    }}
                  >
                    수정하기
                  </div>
                </div>
              </ShowModalTitle>
              <div>
                {searchData.todoCategory
                  .split("#")
                  .filter((category: any) => category !== "")
                  .map((category: any, index: any) => (
                    <p key={index}>#{category}</p>
                  ))}
              </div>
              <div>{searchData.todoContent}</div>
            </ShowModalTopSection>
            <ShowModalBottomSection>
              {searchData.comment.map((comment: any, index: any) => (
                <StyledComment key={index} comment={comment} index={index} />
              ))}
            </ShowModalBottomSection>
          </ShowModalContainer>
        </ModalBackdrop>
      )}
    </>
  );
};

export default Modal;
