import api from "../api/Instance";

/**
 * todoPage에서 전체 테이블 가져오기
 * @get
 * @success
 */
const getTodoListAllTable = async () => {
  try {
    const response = await api.get("/todolist/alllist");
    const result = response.data;
    console.log(result);
    if (response.data.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "글 불러오기 실패" };
  }
};

/**
 * 홈에서 날짜 선택후 투두리스트 생성
 * @post
 * @param title
 * @param content
 * @param member
 * @param selectedTodoId
 * @success
 * @todo 변수명 백엔드와 맞춰봐야함
 */
const createTodoList = async (title, content, member, selectedTodoId) => {
  try {
    const response = await api.post("/todolist/create", {
      title,
      content,
      member, // url사용
      selectedTodoId,
    });
    if (response.data.success) {
      console.log(title, content, member);
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "글작성 실패" };
  }
};

/**
 * 홈에서 날짜 선택후 투두리스트 삭제
 * @post
 * @param selectedTodoId
 * @success
 */
const deleteTodoList = async (selectedTodoId) => {
  try {
    const response = await api.post("/todolist/delete", {
      selectedTodoId,
    });
    return { success: true };
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "삭제 실패" };
  }
};
/**
 * 홈에서 날짜 선택후 투두리스트 수정(update)
 * @post
 * @param title
 * @param Content
 * @param member
 * @param selectedTodoId
 * @success
 */
const updateTodoList = async (title, content, member, selectedTodoId) => {
  try {
    const response = await api.post("/todolist/update", {
      title,
      content,
      member,
      selectedTodoId,
    });
    return { success: true };
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "수정 실패" };
  }
};

export { createTodoList, deleteTodoList, updateTodoList, getTodoListAllTable };
