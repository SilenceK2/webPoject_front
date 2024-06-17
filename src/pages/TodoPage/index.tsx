import {
  TodoContainer,
  TopSection,
  BottomSection,
  RatingContainer,
  RatingContent,
  TodoUpdateList,
  UpdateListTitle,
  UpdateListContent,
  RatingBody,
  RatingBodyTitle,
  RatingBodyContent,
  RatingNumber,
  UpdateContent,
  UpdateContentContent,
  UpdateContentTitle,
  UpdateListTitleContent,
} from "./styles";
import { useEffect, useState } from "react";
import { getTodoListAllTableApi } from "../../utils/apimodule/todolist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  showModalDataAtom,
  showModalDataSelector,
} from "../../utils/recoil/atom";
const TodoPage = () => {
  const [modalType, setModalType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topThreeTodos, setTopThreeTodos] = useState([]);
  const [latestUpdates, setLatestUpdates] = useState([]);
  const modalData = useSetRecoilState(showModalDataSelector);
  const dataValue = useRecoilValue(showModalDataSelector);

  useEffect(() => {
    const fetchTopThreeTodos = async () => {
      try {
        const response = await getTodoListAllTableApi();
        if (response && response.success) {
          const sortedData = response.data.data.sort(
            (a: any, b: any) => b.todoLikes - a.todoLikes
          ); // todoLike 기준으로 내림차순 정렬
          const topThree = sortedData.slice(0, 3);
          setTopThreeTodos(topThree);
          return topThree;
        } else {
          console.log("상위 3개 가져오기 실패");
          return [];
        }
      } catch (error) {
        console.error("fetching error:", error);
        return [];
      }
    };
    const fetchLatestUpdates = async () => {
      try {
        const response = await getTodoListAllTableApi();
        if (response && response.success && response.data.data) {
          const latestFive = response.data.data.slice(0, 5);
          setLatestUpdates(latestFive);
        } else {
          console.log("최신 업데이트 불러오기 실패");
        }
      } catch (error) {
        console.error("fetching error:", error);
      }
    };

    fetchTopThreeTodos();
    fetchLatestUpdates();
  }, []);

  const showTodoModal = () => {
    setIsModalOpen(true);
    setModalType("showSearch");
  };

  return (
    <>
      <TodoContainer>
        <TopSection>
          <RatingContainer>
            <UpdateListTitle>
              <div></div>
              <UpdateListTitleContent>
                실시간 인기 todoList
                <div>인기 todolist를 확인하고 찜해보세요!</div>
              </UpdateListTitleContent>
            </UpdateListTitle>
            <RatingContent>
              {topThreeTodos.map((todo: any, index) => (
                <RatingBody
                  key={todo.id}
                  onClick={() => {
                    modalData(todo);
                    showTodoModal();
                  }}
                >
                  <RatingNumber>
                    <div>{index + 1}</div>
                    <div></div>
                  </RatingNumber>
                  <RatingBodyTitle>
                    <div>{todo.todoTitle}</div>
                    <div>
                      {todo.todoCategory
                        .split("#")
                        .filter((category: any) => category !== "")
                        .map((category: any, index: any) => (
                          <p key={index}>#{category}</p>
                        ))}
                    </div>
                  </RatingBodyTitle>
                  <RatingBodyContent>
                    <div>
                      <FontAwesomeIcon icon={faHeart} color="red" />
                      &nbsp;&nbsp;{todo.todoLike}
                    </div>
                    {/* <div>{todo.todoEmail}</div> */}
                  </RatingBodyContent>
                </RatingBody>
              ))}
            </RatingContent>
          </RatingContainer>
        </TopSection>
        <BottomSection>
          <TodoUpdateListComponents />
        </BottomSection>
      </TodoContainer>
      {isModalOpen && (
        <Modal
          closeModal={() => setIsModalOpen(false)}
          modalType={"showAllList"}
        />
      )}
    </>
  );
};
export default TodoPage;
