import { useEffect, useState } from "react";
import Header from "../style/stylecomponents/Layout/Header";
import { getWeatherByCurrentLocation } from "../utils/apimodule/wheater";
import Loading from "./RouterPages/Loading";
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
  LocationTitle,
  LocationTranspost,
  LocationTime,
  TodoListTitle,
  TodoListTitleContet,
  LocationTitleContet,
  TodoListBoard,
} from "../style/stylecomponents/Layout/Home";
import Weather from "../style/stylecomponents/widget/weatherContent/WeatherIcon";

const Home = () => {
  /**
   * useState하나로 찍고 객체형태에서 구조분할 하는 방식으로 하는게 나을듯
   */
  const [locationState, setLocationState] = useState(false);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [temp, setTemp] = useState(null);
  const [rainCondition, setRainCondition] = useState(null);
  const [id, setId] = useState(null);
  const [loadingPage, setLoadingPage] = useState(false);
  const [title, setTitle] = useState("");
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
          const response = await mappingLocation(latitude, longitude);
          if (response.success) {
            console.log("길찾기 불러오기 성공!");
            await locationResultResponse();
            const weatherData = await getWeatherByCurrentLocation(
              latitude,
              longitude
            );
            setTemp(weatherData.temp);
            setId(weatherData.icon);
            setTitle(weatherData.title);
            setRainCondition(weatherData.rainCondition["1h"]);
          } else {
            throw response;
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
                <Weather
                  id={id}
                  text={title}
                  temp={temp}
                  rainCondition={rainCondition}
                />
                {/* {temp && <div>{temp}</div>} */}
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
