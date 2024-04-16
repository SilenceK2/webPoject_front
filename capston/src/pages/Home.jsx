import React,{ useEffect, useState } from "react";
import axios from "axios"
import Header from "../style/stylecomponents/Layout/Header";
import getWeatherByCurrentLocation from "../utils/apimodule/math/getWheater";
import Loading from "./Loading";
import {
  locationResultResponse,
  mappingLocation,
} from "../utils/apimodule/location";
import{fetchData,onSubmitHandler} from "../utils/apimodule/toDoList";

import {
  PageContainer,
  Content,
  LocationContent,
  WheaterContent,
  TodoListContent,
  WheaterImoge,
  WheaterIcon,
  WheaterTitle,
  LocationTitle,
  LocationTranspost,
  LocationTime,
  TodoListTitle,
  TodoListTitleContet,
  LocationTitleContet,
  TodoListBoard,
  TodoInput,
  TodoInputButton,
  TodoList,
  TodoListTypingContent,
  TodoListShow,
  TodoListText,
  ToDoListId,
  ToDoListWrite,
  ToDoListChecked
} from "../style/stylecomponents/Layout/Home";



// const Home = () => {
  // const [locationState, setLocationState] = useState(false);
  // const [longitude, setLongitude] = useState(null);
  // const [latitude, setLatitude] = useState(null);
  // const [temp, setTemp] = useState(null);
  // const [condition, setCondition] = useState(null);

  // const [loadingPage, setLoadingPage] = useState(false);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setLongitude(position.coords.longitude);
  //         setLatitude(position.coords.latitude);
  //         setLocationState(true);
  //       },
  //       (error) => {
  //         console.error("데이터를 가져오는중 오류발생:", error);
  //       }
  //     );
  //   } else {
  //     console.error("지원하지 않는 브라우저");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (latitude !== null && longitude !== null) {
  //     console.log(latitude, longitude);
  //     const locationSend = async () => {
  //       try {
  //         const result = await mappingLocation(latitude, longitude);

  //         if (result.success) {
  //           console.log("길찾기 불러오기 성공!");
  //           await locationResultResponse();
  //           const weatherData = await getWeatherByCurrentLocation(
  //             latitude,
  //             longitude
  //           );
  //           setTemp(weatherData.temp); // 온도 상태 업데이트
  //           setCondition(weatherData.condition); // 상태 상태 업데이트
  //         } else {
  //           throw result;
  //         }
  //       } catch (error) {
  //         alert(`실패: ${error.message}`);
  //       }
  //     };
  //     locationSend();
  //     setLoadingPage(true);
  //   }
  // }, [locationState, longitude, latitude]);

  const Home = () => {
    const [todoList, setTodoList] = useState(null);
    const [lastId, setLastId] = useState(0); // 마지막 할 일의 id를 저장할 상태

    const SERVER_URL = 'http://localhost:8081/api/todo';

    useEffect(() => {
      fetchData();
      // fetchLastId();
    }, []);

    const fetchData = async () => {
      const response = await axios.get(SERVER_URL);
      setTodoList(response.data);
    };

    // const fetchLastId = async () => {
    //   const response = await axios.get(`${SERVER_URL}/lastId`);
    //   setLastId(response.data.lastId);
    // };
    

    const onSubmitHandler = async (e) => {
      
      const text = e.target.text.value;
      const done = e.target.done.checked;
      await axios.post(SERVER_URL, { id: lastId + 1, text, done }); // 마지막 할 일의 id + 1 사용
      e.preventDefault();
      fetchData(); // 데이터 다시 불러오기
    };
  
  
  return (
    <>
      {/* {loadingPage ? ( */}
        <>
          <Header></Header>
          <PageContainer>
            <Content>
              <WheaterContent>
                <WheaterImoge></WheaterImoge>
                <WheaterTitle>
                  {/* <div> </div>
                  {temp && <div>{temp}</div>}
                  {condition && <div>{condition}</div>} */}
                  <WheaterIcon></WheaterIcon>
                </WheaterTitle>
              </WheaterContent>
              <LocationContent>
                <LocationTitle>
                  <div></div>
                  <LocationTitleContet>
                    <div>나의 가장 빠른 교통수단은?</div>
                    <div>길찾기 서비스를 이용해보세요</div>
                  </LocationTitleContet>
                </LocationTitle>

                <LocationTranspost />
                <LocationTime />
              </LocationContent>


              <TodoListContent>
                <TodoListTitle>
                  <div></div>
                  <TodoListTitleContet>
                    <div>TodoList를 작성하고 관리해보세요</div>
                    <div>나의 오늘 할 일을 정리하고 관리할 수 있습니다</div>
                  </TodoListTitleContet>
                </TodoListTitle>
                <TodoListBoard onSubmit={onSubmitHandler}>               
                  <TodoInput  
            type="text "
            placeholder="오늘 할일을 입력해 주세요."
            name="text"></TodoInput>
            <input name='done' type = 'checkbox' />
            <TodoInputButton 
            type="submit"
            value="추가"/>               
                  </TodoListBoard>
                  <TodoList>
                    <TodoListText>
                      
                    {todoList?.map((todo) => (
                    <TodoListShow key={todo.id}>
                        <ToDoListId>{todo.id}</ToDoListId>
                        <ToDoListWrite>{todo.text}</ToDoListWrite>
{/*                         <ToDoListChecked>{todo.done ? '완료' : '미완료'}</ToDoListChecked>*/}
                        <ToDoListChecked type="checkbox" name = 'done'></ToDoListChecked>
                    </TodoListShow>
                    ))}
                    </TodoListText>                 
                  </TodoList>
              </TodoListContent>
            </Content>
          </PageContainer>
        </>
      {/* ) : (
        <Loading />
      )} */}
    </>
  );
};

export default Home;
