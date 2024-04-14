import { useEffect, useState } from "react";
import Header from "../style/stylecomponents/Layout/Header";
import getWeatherByCurrentLocation from "../utils/apimodule/math/getWheater";
import Loading from "./Loading";
import {
  locationResultResponse,
  mappingLocation,
} from "../utils/apimodule/location";
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
} from "../style/stylecomponents/Layout/Home";

const Home = () => {
  const [locationState, setLocationState] = useState(false);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [temp, setTemp] = useState(null);
  const [condition, setCondition] = useState(null);

  const [loadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLongitude(position.coords.longitude);
          setLatitude(position.coords.latitude);
          setLocationState(true);
        },
        (error) => {
          console.error("데이터를 가져오는중 오류발생:", error);
        }
      );
    } else {
      console.error("지원하지 않는 브라우저");
    }
  }, []);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      console.log(latitude, longitude);
      const locationSend = async () => {
        try {
          const result = await mappingLocation(latitude, longitude);

          if (result.success) {
            console.log("길찾기 불러오기 성공!");
            await locationResultResponse();
            const weatherData = await getWeatherByCurrentLocation(
              latitude,
              longitude
            );
            setTemp(weatherData.temp); // 온도 상태 업데이트
            setCondition(weatherData.condition); // 상태 상태 업데이트
          } else {
            throw result;
          }
        } catch (error) {
          alert(`실패: ${error.message}`);
        }
      };
      locationSend();
      setLoadingPage(true);
    }
  }, [locationState, longitude, latitude]);

  return (
    <>
      {loadingPage ? (
        <>
          <Header></Header>
          <PageContainer>
            <Content>
              <WheaterContent>
                <WheaterImoge></WheaterImoge>
                <WheaterTitle>
                  <div> </div>
                  {temp && <div>{temp}</div>}
                  {condition && <div>{condition}</div>}
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
                <TodoListBoard></TodoListBoard>
              </TodoListContent>
            </Content>
          </PageContainer>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
