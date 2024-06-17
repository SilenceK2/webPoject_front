import {
  RatingBody,
  RatingBodyContent,
  RatingBodyTitle,
  RatingContainer,
  RatingContent,
  UpdateListTitle,
  UpdateListTitleContent,
} from "./styles";
import { LastestUpdateSelector } from "../../utils/recoil/atom";
import { useRecoilValue } from "recoil";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoUpdateListComponents = () => {
  const latestUpdates = useRecoilValue(LastestUpdateSelector);
  return (
    <RatingContainer>
      <UpdateListTitle>
        <div></div>
        <UpdateListTitleContent>
          실시간 업데이트
          <div>사람들이 올린 투두리스트를 확인해보세요</div>
        </UpdateListTitleContent>
      </UpdateListTitle>
      <RatingContent>
        {latestUpdates.map((todo: any, index: any) => (
          <RatingBody
            key={todo.id}
            // onClick={() => {
            //   modalData(todo);
            //   showTodoModal();
            // }}
          >
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
                <div>{todo.todoEmail}</div>
                <div>
                  <FontAwesomeIcon icon={faHeart} color="red" />
                  &nbsp;&nbsp;{todo.todoLike}
                </div>
              </div>
            </RatingBodyContent>
          </RatingBody>
        ))}
      </RatingContent>
    </RatingContainer>
  );
};

export default TodoUpdateListComponents;
