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
  MainContent,
} from "../style/stylecomponents/Layout/Home";
import Weather from "../components/weatherContent";
import TodoContentBox from "../components/todoContent";
import MainContentBox from "../components/MainContent";
const Home = () => {
  const [loadingPage, setLoadingPage] = useState(false);
  const [weatherData, setWeatherData] = useState({
    temp: null,
    rainCondition: null,
    icon: null,
    title: "",
  });

  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     try {
  //       if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(
  //           async (position) => {
  //             const { latitude, longitude } = position.coords;
  //             const response = await mappingLocation(latitude, longitude);
  //             if (response.success) {
  //               await locationResultResponse();
  //               const weatherData = await getWeatherByCurrentLocation(
  //                 latitude,
  //                 longitude
  //               );
  //               setWeatherData(weatherData);
  //               setLoadingPage(true);
  //             } else {
  //               throw new Error("location 정보 불러오기 실패");
  //             }
  //           },
  //           (error) => {
  //             console.error("geolocation error:", error);
  //             setLoadingPage(true);
  //           }
  //         );
  //       } else {
  //         throw new Error("위치 정보를 지원하지 않는 브라우저입니다.");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       alert(`에러 메시지: ${error.message}`);
  //     }
  //   };

  //   fetchWeatherData();
  // }, []);

  return (
    <>
      <>
        <Header />
        <PageContainer>
          <Content>
            <MainContent>
              <MainContentBox />
            </MainContent>

            {/* <LocationContent>
                <LocationContentBox />
              </LocationContent> */}
            <TodoListContent>
              <TodoContentBox />
            </TodoListContent>
            <WheaterContent>
              {loadingPage ? (
                <Weather
                  id={weatherData.icon}
                  text={weatherData.title}
                  temp={weatherData.temp}
                  rainCondition={weatherData.rainCondition}
                />
              ) : (
                <Loading />
              )}
            </WheaterContent>
          </Content>
        </PageContainer>
      </>
    </>
  );
};

export default Home;
