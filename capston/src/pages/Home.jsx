import React, { useEffect, useState } from "react";
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
  const [loadingPage, setLoadingPage] = useState(false);
  const [weatherData, setWeatherData] = useState({
    temp: null,
    rainCondition: null,
    icon: null,
    title: "",
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              const response = await mappingLocation(latitude, longitude);
              if (response.success) {
                await locationResultResponse();
                const weatherData = await getWeatherByCurrentLocation(
                  latitude,
                  longitude
                );
                setWeatherData(weatherData);
                setLoadingPage(true);
              } else {
                throw new Error("location 정보 불러오기 실패");
              }
            },
            (error) => {
              console.error("geolocation error:", error);
              setLoadingPage(true);
            }
          );
        } else {
          throw new Error("위치 정보를 지원하지 않는 브라우저입니다.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert(`에러 메시지: ${error.message}`);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <>
      {loadingPage ? (
        <>
          <Header />
          <PageContainer>
            <Content>
              <WheaterContent>
                <Weather
                  id={weatherData.icon}
                  text={weatherData.title}
                  temp={weatherData.temp}
                  rainCondition={weatherData.rainCondition}
                />
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
                <TodoListBoard />
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
