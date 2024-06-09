// import React, { useEffect, useState } from "react";
// import {
//   TodoListTitle,
//   TodoListTitleContet,
//   TodoListBoard,
//   Topsection,
//   BottomSection,
//   TodoListMonth,
//   TodoListMon,
//   TodoListTue,
//   TodoListWed,
//   TodoListFri,
//   TodoListSat,
//   TodoListSun,
//   TodoListWeek,
//   TodoListThu,
//   TodoListDate,
//   TodoListDateBox,
//   TodoListDetail,
//   ModalContainer,
//   ModalBackdrop,
//   ModalTopSection,
//   ModalBottomSection,
//   ModalInput,
//   ModalButton,
// } from "./styles";
// import {
//   createTodoListApi,
//   updateTodoListApi,
//   deleteTodoListApi,
//   todayTodoListApi,
// } from "../../utils/apimodule/todolist";
// import { useRecoilValue } from "recoil";
// import { useremailState } from "../../utils/recoil/atom";

// const TodoContentBox = () => {
//   const [selectedId, setSelectedId] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const todoemail = useRecoilValue(useremailState);
//   const [sharedState, setSharedState] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [existingData, setExistingData]: any = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await todayTodoListApi(todoemail);
//         if (result.success && Array.isArray(result.data)) {
//           const selectedTodo = result.data.find(
//             (todo: any) => todo.todoDate === selectedId
//           );
//           if (selectedTodo) {
//             setTitle(selectedTodo.todoTitle);
//             setContent(selectedTodo.todoContent);
//             setCategories(selectedTodo.todoCategory);
//             setExistingData(null);
//           } else {
//             setTitle("");
//             setContent("");
//             setCategories([]);
//             setExistingData(null);
//             // setSelectedId(null);
//             setSharedState(false);
//           }
//         } else {
//           setTitle("");
//           setContent("");
//           setCategories([]);
//           setExistingData(false);
//         }
//       } catch (error) {
//         console.error("fetch error:", error);
//       }
//     };

//     if (selectedId) {
//       fetchData();
//     }
//   }, [selectedId, todoemail]);

//   const handleDateClick = async (date: any) => {
//     setSelectedId(date);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTitle("");
//     setContent("");
//     setSharedState(false);
//     setCategories([]);
//     setSelectedId(null);
//   };

//   const createTodoList = async () => {
//     try {
//       if (title.trim().length > 10 || content.trim().length > 50) {
//         alert("입력한 내용이 제한을 초과했습니다.");
//         return;
//       }
//       if (!title.trim() || !content.trim()) {
//         alert("빈 칸을 채워주세요.");
//         return;
//       }

//       if (window.confirm("작성하시겠습니까?")) {
//         const response = await createTodoListApi(
//           title,
//           content,
//           todoemail,
//           sharedState,
//           selectedId,
//           categories
//         );
//         console.log(
//           title,
//           content,
//           todoemail,
//           selectedId,
//           sharedState,
//           categories,
//           selectedId
//         );
//         if (response.success === true) {
//           setIsModalOpen(false);
//         }
//       }
//     } catch (error) {
//       console.log(`${error}`);
//     }
//   };

//   const updateTodoList = async () => {
//     try {
//       if (title.trim().length > 10 || content.trim().length > 50) {
//         alert("입력한 내용이 제한을 초과했습니다.");
//         return;
//       }

//       if (!title.trim() || !content.trim()) {
//         alert("빈 칸을 채워주세요.");
//         return;
//       }

//       if (window.confirm("수정하시겠습니까?")) {
//         const result = await updateTodoListApi(
//           title,
//           content,
//           todoemail,
//           selectedId,
//           categories
//         );
//         if (result.success) {
//           setIsModalOpen(false);
//         } else {
//           alert("글 작성 실패");
//         }
//       }
//     } catch (error) {
//       console.log(`${error}`);
//     }
//   };

//   const deleteTodoList = async () => {
//     try {
//       if (window.confirm("정말 삭제하시겠습니까?")) {
//         const result: any = await deleteTodoListApi(todoemail, selectedId);
//         if (result.data.success) {
//           setIsModalOpen(false);
//         } else {
//           alert("글 삭제 실패");
//         }
//       }
//     } catch (error) {
//       console.log(`${error}`);
//     }
//     setIsModalOpen(false);
//   };

//   const renderDates = () => {
//     const dates = [];
//     for (let i = 1; i <= 31; i++) {
//       const dayStyle =
//         i === 6 || i === 13 || i === 20 || i === 27 ? "blue" : "black";
//       dates.push(
//         <TodoListDate
//           key={i}
//           onClick={() => handleDateClick(i)}
//           style={{ opacity: i <= 0 || i > 30 ? 0.5 : 1, color: dayStyle }}
//         >
//           {i}
//           <TodoListDetail></TodoListDetail>
//         </TodoListDate>
//       );
//     }
//     return dates;
//   };

//   return (
//     <>
//       <Topsection>
//         <TodoListTitle>
//           <div></div>
//           <TodoListTitleContet>
//             <div>TodoList를 작성하고 관리해보세요</div>
//             <div>나의 오늘 할 일을 정리하고 관리할 수 있습니다</div>
//           </TodoListTitleContet>
//         </TodoListTitle>
//       </Topsection>
//       <BottomSection>
//         <TodoListBoard>
//           <TodoListMonth>4월</TodoListMonth>
//           <TodoListWeek>
//             <TodoListSun>월</TodoListSun>
//             <TodoListMon>월</TodoListMon>
//             <TodoListTue>화</TodoListTue>
//             <TodoListWed>수</TodoListWed>
//             <TodoListThu>목</TodoListThu>
//             <TodoListFri>금</TodoListFri>
//             <TodoListSat>토</TodoListSat>
//           </TodoListWeek>
//           <TodoListDateBox>{renderDates()}</TodoListDateBox>
//         </TodoListBoard>
//         {isModalOpen && (
//           <>
//             <ModalBackdrop>
//               <ModalContainer>
//                 <div>
//                   <p onClick={closeModal}>❌</p>
//                 </div>
//                 <ModalTopSection>
//                   <ModalInput
//                     type="text"
//                     placeholder="제목을 입력하세요"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                   />
//                   <ModalInput
//                     type="text"
//                     placeholder="#으로 카테고리를 입력하세요"
//                     value={categories}
//                     onChange={(e: any) => {
//                       setCategories(e.target.value);
//                     }}
//                   />
//                 </ModalTopSection>
//                 <ModalBottomSection>
//                   <ModalInput
//                     type="text"
//                     placeholder="내용을 입력하세요"
//                     value={content}
//                     onChange={(e) => {
//                       setContent(e.target.value);
//                     }}
//                   />
//                   <label>
//                     <input
//                       type="checkbox"
//                       onChange={() => {
//                         setSharedState(true);
//                       }}
//                     />
//                     공유하기
//                   </label>
//                   <ModalButton>
//                     {!existingData && (
//                       <button onClick={createTodoList}>추가</button>
//                     )}
//                     <button onClick={updateTodoList}>수정</button>
//                     <button onClick={deleteTodoList}>삭제</button>
//                   </ModalButton>
//                 </ModalBottomSection>
//               </ModalContainer>
//             </ModalBackdrop>
//           </>
//         )}
//       </BottomSection>
//     </>
//   );
// };

// export default TodoContentBox;
