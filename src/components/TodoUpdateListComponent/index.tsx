import {
  TodoUpdateList,
  UpdateContent,
  UpdateContentContent,
  UpdateContentTitle,
  UpdateListContent,
  UpdateListTitle,
  UpdateListTitleContent,
} from "./styles";
import {LastestUpdateSelector} from 
    import { useRecoilValue } from "recoil";

const TodoUpdateListComponents = () => {

    const latestUpdates = useRecoilValue(LastestUpdateSelector)
  return (
    <TodoUpdateList>
      <UpdateListTitle>
        <div></div>
        <UpdateListTitleContent>
          실시간 업데이트
          <div>사람들이 공유한 todolist를 확인해보세요!</div>
        </UpdateListTitleContent>
      </UpdateListTitle>
      <UpdateListContent>
        {latestUpdates.map((update: any, index: any) => (
          <UpdateContent key={update.id}>
            <UpdateContentTitle>{update.todoTitle}</UpdateContentTitle>
            <UpdateContentContent>
              <div>
                {update.todoCategory
                  .split("#")
                  .filter((category: any) => category !== "")
                  .map((category: any, index: any) => (
                    <p key={index}>#{category}</p>
                  ))}
              </div>
              <div>{update.todoContent}</div>
            </UpdateContentContent>
          </UpdateContent>
        ))}
      </UpdateListContent>
    </TodoUpdateList>
  );
};

export default TodoUpdateListComponents;
