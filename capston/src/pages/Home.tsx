import React, { useEffect, useState } from "react";
import Header from "../style/stylecomponents/Layout/Header";
import { getWeatherByCurrentLocation } from "../utils/apimodule/wheater";
import Loading from "./RouterPages/Loading";
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
import LocationContentBox from "../components/locationContent";
import { useSetRecoilState } from "recoil";

function Home() {
  const [loadingPage, setLoadingPage]: any = useState(false);
  const [weatherData, setWeatherData]: any = useState({
    temp: null,
    rainCondition: null,
    icon: null,
    title: "",
  });

  const [mainContentVisible, setMainContentVisible]: any = useState(false); // mainContent 보여지는 여부 추가
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              try {
                const weatherData = await getWeatherByCurrentLocation(
                  latitude,
                  longitude
                );
                setWeatherData(weatherData);
                setLoadingPage(true);
              } catch (error) {
                console.log(error);
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
      } catch (error: any) {
        console.error("Error:", error);
        alert(`에러 메시지: ${error.message}`);
      }
    };

    fetchWeatherData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainContentVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <>
        <Header />
        <PageContainer>
          <Content>
            <MainContent show={mainContentVisible}>
              <MainContentBox />
            </MainContent>
            <TodoListContent>{/* <TodoContentBox /> */}</TodoListContent>
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
            <LocationContent>
              <LocationContentBox />
            </LocationContent>
          </Content>
        </PageContainer>
      </>
    </>
  );
}

export default Home;
