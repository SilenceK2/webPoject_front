import api from "../api/Instance";

/**
 * todoPage에서 전체 테이블 가져오기
 * @get
 * @success
 */
const getTodoListAllTableApi = async () => {
  try {
    const response = await api.get(`/todo/allList`);
    const result = response.data;
    console.log(result);
    if (result.success) {
      return { success: true, data: result };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "글 불러오기 실패" };
  }
};

// /**
//  * 홈화면 마운트될때 멤버이메일에 맞는 오늘의 todolist불러오기
//  * @post
//  * @param title
//  * @param content
//  * @param member
//  * @param selectedTodoId
//  * @success
//  */

// const todoListApi = async (userEmail: any) => {
//   try {
//     const response = await api.post(`/todo/today`, {
//       todoEmail: userEmail,
//     });
//     if (response.data.success) {
//       return { success: true, data: response.data.data };
//     } else {
//       return { success: false };
//     }
//   } catch (error) {
//     console.error("error:", error);
//     return { success: false, error: "불러오기 실패" };
//   }
// };

/**
 * 홈화면 마운트될때 멤버아이디에 맞는 todolist불러오기
 * @post
 * @success
 */

export const readTodoListApi = async () => {
  try {
    const response = await api.get(`/todo/list`);
    const data = response.data.data;
    console.log(data);

    if (response.status === 200) {
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error };
  }
};

/**
 * 투두리스트 생성 api

 */
const createTodoListApi = async (
  title: any,
  content: any,
  categories: any,
  time: any,

  currendDate: any,
  sharedState: any
) => {
  try {
    const memberId = localStorage.getItem("memberId");
    const response = await api.post("/todo/create", {
      todoTitle: title,
      todoContent: content,
      todoCategory: categories,
      todoDate: currendDate,
      todoTime: time,
      todoCheck: sharedState,
      memberId: memberId,
    });

    if (response.status === 200) {
      console.log(response.data);
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "전송 실패" };
  }
};

/**
 * 홈에서 날짜 선택후 투두리스트 삭제
 * @post
 * @param selectedTodoId
 * @success
 */
const deleteTodoListApi = async (todoId: any) => {
  try {
    const memberId = localStorage.getItem("memberId");
    const response = await api.post(`/todo/delete`, {
      memberId: memberId,
      todoId: todoId,
    });

    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "삭제 실패" };
  }
};
/**
 * 홈에서 날짜 선택후 투두리스트 수정(update)
 * @post
 * @param title
 * @param content
 * @param categories
 * @param time
 */
const updateTodoListApi = async (
  title: any,
  content: any,
  time: any,
  categories: any,
  todoId: any
) => {
  try {
    const memberId = localStorage.getItem("memberId");
    const response = await api.post(`/todo/update`, {
      memberId: memberId,
      todoId: todoId,
      todoTitle: title,
      todoCategory: categories,
      todoContent: content,
      todoTime: time,
      todoCheck: "TRUE",
    });
    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "수정 실패" };
  }
};

/**
 * 투두리스트 검색
 * @param input
 * @returns
 */
const sendSearchTitleApi = async (input: any) => {
  try {
    const response: any = await api.post(`/todo/searchTitle`, {
      todoTitle: input,
    });
    const data = response.data;
    if (response.status === 200) {
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "글찾기 불러오기 실패" };
  }
};

/**
 * 투두리스트 검색
 * @param input
 * @returns
 */
const sendSearchCaterogyApi = async (input: any) => {
  try {
    const response: any = await api.post(`/todo/searchCategory`, {
      todoTitle: input,
    });
    const data = response.data;
    console.log(data);
    if (response.status === 200) {
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "글찾기 불러오기 실패" };
  }
};

/**
 * 댓글
 * @param comment
 * @returns
 */
const createCommentApi = async (comment: any) => {
  try {
    const memberId = localStorage.getItem("memberId");
    const response: any = await api.post(`/todo/comment`, {
      todoTitle: comment,
      memberId: memberId,
    });

    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "글찾기 불러오기 실패" };
  }
};
export {
  createTodoListApi,
  deleteTodoListApi,
  updateTodoListApi,
  getTodoListAllTableApi,
  sendSearchTitleApi,
  sendSearchCaterogyApi,
  createCommentApi,
};
