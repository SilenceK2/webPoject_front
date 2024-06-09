import React, { useEffect, useState } from "react";
import { getWeatherByCurrentLocation } from "../../utils/apimodule/wheater";
import Loading from "../RouterPages/Loading";
import TodoContentComponent from "../../components/TodoContentComponent";
import {
  PageContainer,
  Content,
  LocationContent,
  TodoListContent,
  MainContent,
  // ScrollBoxContainer,
} from "./styles";
import MainContentBox from "../../components/MainContent";
import LocationContentBox from "../../components/LocationContent";
import { weatherSelector, loadingStateSelector } from "../../utils/recoil/atom";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";

function Home() {
  const setLoadingPage: any = useSetRecoilState(loadingStateSelector);

  const weatherValue: any = useSetRecoilState(weatherSelector);

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

                weatherValue({
                  temp: weatherData.temp,
                  rainCondition: weatherData.rainCondition,
                  id: weatherData.icon,
                  text: weatherData.title,
                });

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
        <PageContainer>
          <Content>
            <MainContent show={mainContentVisible}>
              <MainContentBox />
            </MainContent>

            <TodoListContent>
              {/* <TodoContentBox /> */}
              <TodoContentComponent />
            </TodoListContent>

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
