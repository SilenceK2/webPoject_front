import {
  TodoContainer,
  TopSection,
  BottomSection,
  RatingContainer,
  RatingTitle,
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
import Header from "../../style/stylecomponents/Layout/Header";
import { useEffect, useState } from "react";
import { getTodoListAllTable } from "../../utils/apimodule/todolist";

const TodoPage = () => {
  const [listTableData, setListTableData] = useState({
    title: "",
    content: "",
    memberName: "",
    like: "",
  });
  useEffect(() => {
    const fetchGetTodoListData = async () => {
      try {
        const result = await getTodoListAllTable();
        setListTableData(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGetTodoListData();
  }, []);

  return (
    <>
      <Header></Header>
      <TodoContainer>
        <TopSection>
          <RatingContainer>
            <UpdateListTitle>
              <div>🏆</div>
              <UpdateListTitleContent>
                실시간 인기 todoList
                <div>인기 todolist를 확인하고 찜해보세요!</div>
              </UpdateListTitleContent>
            </UpdateListTitle>
            <RatingContent>
              <RatingBody>
                <RatingNumber>
                  <div>1</div>
                  <div></div>
                </RatingNumber>
                <RatingBodyTitle>
                  <div>피아노 연습하는 하루</div>
                  <div>
                    <p>#피아노</p> <p>#예술</p> <p>#여가</p>
                  </div>
                </RatingBodyTitle>
                <RatingBodyContent>
                  <div>⭐️&nbsp;&nbsp;1,523</div>
                  <div>@ktg5679</div>
                </RatingBodyContent>
              </RatingBody>
              <RatingBody>
                <RatingNumber>
                  <div>2</div>
                  <div></div>
                </RatingNumber>
                <RatingBodyTitle>
                  <div>친구와 떠난 행복한 여행</div>
                  <div>
                    <p>#무인도</p> <p>#여행</p> <p>#여가</p>
                  </div>
                </RatingBodyTitle>
                <RatingBodyContent>
                  <div>⭐️&nbsp;&nbsp;1,123</div>
                  <div>@hichanmin</div>
                </RatingBodyContent>
              </RatingBody>
              <RatingBody>
                <RatingNumber>
                  <div>3</div>
                  <div></div>
                </RatingNumber>
                <RatingBodyTitle>
                  <div>정보처리기사산업실기 시작</div>
                  <div>
                    <p>#정산기</p> <p>자격증</p>
                  </div>
                </RatingBodyTitle>
                <RatingBodyContent>
                  <div>⭐️&nbsp;&nbsp;798</div>
                  <div>@raebagi</div>
                </RatingBodyContent>
              </RatingBody>
            </RatingContent>
          </RatingContainer>
        </TopSection>
        <BottomSection>
          <TodoUpdateList>
            <UpdateListTitle>
              <div>✅</div>
              <UpdateListTitleContent>
                실시간 업데이트
                <div>사람들이 공유한 todolist를 확인해보세요!</div>
              </UpdateListTitleContent>
            </UpdateListTitle>
            <UpdateListContent>
              <UpdateContent>
                <UpdateContentTitle>정보처리산업기사실기</UpdateContentTitle>
                <UpdateContentContent>
                  <div>
                    <p>#정산기</p>
                    <p>#나는최고</p>
                    <p>#자기개발</p>
                  </div>
                  <div>
                    책 사서 공부하려고 하는데 카페를 가야하는데 아주 힘들고
                    위태롭고 애처롭다
                  </div>
                </UpdateContentContent>
              </UpdateContent>
              <UpdateContent>
                {" "}
                <UpdateContentTitle>박찬민은 빵꾸똥꾸</UpdateContentTitle>
                <UpdateContentContent>
                  <div>
                    <p>#박찬민</p>
                    <p>#이상함</p>
                    <p>#똥꼬</p>
                  </div>
                  <div>
                    찬민이는 백엔드를 공부하고 있는데 이상하다 애가아주아중
                    ㅣ아한다 그냥 이상하다 뭐가 이상한지 모르겠는데 이상하다
                  </div>
                </UpdateContentContent>
              </UpdateContent>
              <UpdateContent>
                {" "}
                <UpdateContentTitle>박찬민은 빵꾸똥꾸</UpdateContentTitle>
                <UpdateContentContent>
                  <div>
                    <p>#박찬민</p>
                    <p>#이상함</p>
                    <p>#똥꼬</p>
                  </div>
                  <div>
                    찬민이는 백엔드를 공부하고 있는데 이상하다 애가아주아중
                    ㅣ아한다 그냥 이상하다 뭐가 이상한지 모르겠는데 이상하다
                  </div>
                </UpdateContentContent>
              </UpdateContent>
              <UpdateContent>
                {" "}
                <UpdateContentTitle>박찬민은 빵꾸똥꾸</UpdateContentTitle>
                <UpdateContentContent>
                  <div>
                    <p>#박찬민</p>
                    <p>#이상함</p>
                    <p>#똥꼬</p>
                  </div>
                  <div>
                    찬민이는 백엔드를 공부하고 있는데 이상하다 애가아주아중
                    ㅣ아한다 그냥 이상하다 뭐가 이상한지 모르겠는데 이상하다
                  </div>
                </UpdateContentContent>
              </UpdateContent>
            </UpdateListContent>
          </TodoUpdateList>
        </BottomSection>
      </TodoContainer>
    </>
  );
};

export default TodoPage;
