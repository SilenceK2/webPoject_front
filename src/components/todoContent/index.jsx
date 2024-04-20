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
  readTodoListApi,
} from "../../utils/apimodule/todolist";
import { useRecoilValue } from "recoil";
import { useremailState } from "../../utils/recoil/atom";

const TodoContentBox = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todoemail = useRecoilValue(useremailState);
  const [sharedState, setSharedState] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleDateClick = async (date) => {
    setSelectedId(date);
    setIsModalOpen(true);
    try {
      const result = await readTodoListApi(todoemail);
      console.log(result.data);
      if (result && result.data && result.data.length > 0) {
        const selectedTodo = result.data.find((todo) => todo.todoDate === date);
        if (selectedTodo) {
          setTitle(selectedTodo.title);
          setContent(selectedTodo.content);
          setCategories(selectedTodo.categories);
        } else {
          setTitle("");
          setContent("");
          setCategories([]);
        }
      } else {
        setTitle("");
        setContent("");
        setCategories([]);
      }
    } catch (error) {
      console.error("Error fetching todo list:", error);
      // 에러 처리
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTitle("");
    setContent("");
    setSharedState("");
    setCategories([]);
  };

  const createTodoList = async () => {
    try {
      if (title.trim().length > 10 || content.trim().length > 50) {
        alert("입력한 내용이 제한을 초과했습니다.");
        return;
      }
      if (!title.trim() || !content.trim()) {
        alert("빈 칸을 채워주세요.");
        return;
      }

      const result = await createTodoListApi(
        title,
        content,
        todoemail,
        sharedState,
        selectedId,
        categories
      );
      console.log(
        title,
        content,
        todoemail,
        selectedId,
        sharedState,
        categories,
        selectedId
      );
      if (result.data.success) {
        if (window.confirm("작성하시겠습니까?")) {
          setIsModalOpen(false);
        }
      } else {
      }
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const updateTodoList = async () => {
    try {
      if (title.trim().length > 10 || content.trim().length > 50) {
        alert("입력한 내용이 제한을 초과했습니다.");
        return;
      }

      if (!title.trim() || !content.trim()) {
        alert("빈 칸을 채워주세요.");
        return;
      }

      const result = await updateTodoListApi(
        title,
        content,
        todoemail,
        selectedId,
        categories
      );
      if (result.data.success) {
        if (window.confirm("수정하시겠습니까?")) {
          setIsModalOpen(false);
        }
      } else {
        alert("글 작성 실패");
      }
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const deleteTodoList = async () => {
    try {
      const result = await deleteTodoListApi(selectedId, todoemail);
      if (result.data.success) {
        if (window.confirm("정말 삭제하시겠습니까?")) {
          setIsModalOpen(false);
        }
      } else {
        alert("글 작성 실패");
      }
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const renderDates = () => {
    const dates = [];
    for (let i = 1; i <= 31; i++) {
      const dayStyle =
        i === 6 || i === 13 || i === 20 || i === 27 ? "blue" : "black";
      dates.push(
        <TodoListDate
          key={i}
          onClick={() => handleDateClick(i)}
          style={{ opacity: i <= 0 || i > 30 ? 0.5 : 1, color: dayStyle }}
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
          <>
            <ModalBackdrop>
              <ModalContainer>
                <div>
                  <p onClick={closeModal}>❌</p>
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
                    placeholder="카테고리를 입력하세요"
                    value={categories.join("#")}
                    onChange={(e) => {
                      const categoryArray = e.target.value.split("#");
                      setCategories(categoryArray);
                    }}
                  />
                </ModalTopSection>
                <ModalBottomSection>
                  <ModalInput
                    type="text"
                    placeholder="내용을 입력하세요"
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                  />
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => {
                        setSharedState(true);
                      }}
                    />
                    공유하기
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
        )}
      </BottomSection>
    </>
  );
};

export default TodoContentBox;
