import React, { useEffect, useState } from "react";
import {
  TodoListTitle,
  TodoListTitleContet,
  TodoListBoard,
  Topsection,
  BottomSection,
  TodoListMonth,
  TodoListMon,
  TodoListTue,
  TodoListWed,
  TodoListFri,
  TodoListSat,
  TodoListSun,
  TodoListWeek,
  TodoListThu,
  TodoListDate,
  TodoListDateBox,
  TodoListDetail,
  ModalContainer,
  ModalBackdrop,
  TitleInput,
  ContentInput,
  ModalTopSection,
  ModalBottomSection,
  Input,
  ModalInput,
  ModalButton,
} from "./styles";
import {
  createTodoListApi,
  updateTodoListApi,
  deleteTodoListApi,
} from "../../utils/apimodule/todolist";
import { useRecoilValue } from "recoil";
import { useremailState } from "../../utils/recoil/atom";

const TodoContentBox = () => {
  const [selectedId, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todoemail = useRecoilValue(useremailState);

  useEffect(() => {}, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createTodoList = async () => {
    try {
      const result = await createTodoListApi(title, content, todoemail);
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const updateTodoList = async () => {
    try {
      const result = await updateTodoListApi(
        title,
        content,
        todoemail,
        selectedId
      );
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const deleteTodoList = async () => {
    try {
      const result = await deleteTodoListApi(selectedId, todoemail);
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const renderDates = () => {
    const dates = [];
    for (let i = 1; i <= 31; i++) {
      const dayStyle =
        i === 6 || i === 13 || i === 20 || i === 27
          ? "blue"
          : i === 7 || i === 14 || i === 21 || i === 28
          ? "red"
          : null;
      dates.push(
        <TodoListDate
          key={i}
          onClick={() => handleDateClick(i)}
          style={{ opacity: i <= 4 || i > 30 ? 0.5 : 1, color: dayStyle }}
        >
          {i}
          <TodoListDetail></TodoListDetail>
        </TodoListDate>
      );
    }
    return dates;
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
          <TodoListMonth>4월</TodoListMonth>
          <TodoListWeek>
            <TodoListSun>월</TodoListSun>
            <TodoListMon>월</TodoListMon>
            <TodoListTue>화</TodoListTue>
            <TodoListWed>수</TodoListWed>
            <TodoListThu>목</TodoListThu>
            <TodoListFri>금</TodoListFri>
            <TodoListSat>토</TodoListSat>
          </TodoListWeek>
          <TodoListDateBox>{renderDates()}</TodoListDateBox>
        </TodoListBoard>
        {isModalOpen && (
          <ModalBackdrop>
            <ModalContainer>
              <ModalTopSection>
                <ModalInput
                  // value="제목을 입력하세요"
                  type="text"
                  placeholder="제목을 입력하세요"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </ModalTopSection>
              <ModalBottomSection>
                <ModalInput
                  // value="제목을 입력하세요"
                  type="text"
                  placeholder="내용을 입력하세요"
                  onChange={(e) => setContent(e.target.value)}
                />
                <ModalButton>
                  <button onClick={closeModal}>모달 닫기</button>
                  <button onClick={createTodoList}>추가</button>
                  <button onClick={updateTodoList}>수정</button>
                  <button onClick={deleteTodoList}>삭제</button>
                </ModalButton>
              </ModalBottomSection>
            </ModalContainer>
          </ModalBackdrop>
        )}
      </BottomSection>
    </>
  );
};

export default TodoContentBox;
