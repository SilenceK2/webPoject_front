import api from "../api/Instance";

/**

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
 *
 * @returns
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

export { createTodoList, deleteTodoList, updateTodoList };
