import React, { useState } from "react";
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
  Redcolor,
  TodoListDetail,
  ModalContainer,
  ModalBackdrop,
  ModalTitle,
  ModalMonth,
  Bluecolor

} from "./styles";

const TodoContentBox = () => {
  const [selectedId,setSelectedDate] = useState(null);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => { 
    setIsModalOpen(false);
  }
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
          <TodoListMonth>
              4월
          </TodoListMonth>
          <TodoListWeek>
          <TodoListSun>월</TodoListSun>
          <TodoListMon>월</TodoListMon>
          <TodoListTue>화</TodoListTue>
          <TodoListWed>수</TodoListWed>
          <TodoListThu>목</TodoListThu>
          <TodoListFri>금</TodoListFri>
          <TodoListSat>토</TodoListSat>
          </TodoListWeek>
          <TodoListDateBox>

            <TodoListDate onClick={() => handleDateClick(31)} style={{ opacity: 0.5 }}><Redcolor>31</Redcolor><TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(1)}>1<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(2)}>2<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(3)}>3<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(4)}>4<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(5)}>5<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(6)}><Bluecolor>6</Bluecolor><TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(7)}><Redcolor>7</Redcolor><TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(8)}>8<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(9)}>9<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(10)}>10<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(11)}>11<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(12)}>12<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(13)}><Bluecolor>13</Bluecolor><TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(14)}><Redcolor>14</Redcolor><TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(15)}>15<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(16)}>16<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(17)}>17<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(18)}>18<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(19)}>19<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(20)}><Bluecolor>20</Bluecolor><TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(21)}><Redcolor>21</Redcolor><TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(22)}>22<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(23)}>23<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(24)}>24<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(25)}>25<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(26)}>26<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(27)}><Bluecolor>27</Bluecolor><TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(28)}><Redcolor>28</Redcolor><TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(29)}>29<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(30)}>30<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(1)} style={{ opacity: 0.5 }}>1<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(2)} style={{ opacity: 0.5 }}>2<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(3)} style={{ opacity: 0.5 }}>3<TodoListDetail></TodoListDetail></TodoListDate>
            <TodoListDate onClick={() => handleDateClick(4)} style={{ opacity: 0.5 }}><Bluecolor>4</Bluecolor><TodoListDetail></TodoListDetail></TodoListDate>

          </TodoListDateBox>
        </TodoListBoard>
        {isModalOpen && (
          <ModalBackdrop onClick={closeModal}>
            <ModalContainer>
              <ModalTitle>오늘 나의 할일</ModalTitle>
              <ModalMonth>{selectedId}일</ModalMonth>
            </ModalContainer>
          </ModalBackdrop>
        )}
      </BottomSection>
    </>
  );
};
export default TodoContentBox;
