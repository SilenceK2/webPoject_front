import { useEffect, useState } from "react";
import Header from "../style/stylecomponents/Layout/Header";
import getWeatherByCurrentLocation from "../utils/apimodule/math/getWheater";

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
  WheaterProgress,
  WheaterTitle,
} from "../style/stylecomponents/Layout/Home";

const Home = () => {
  const [locationState, setLocationState] = useState(false);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [temp, setTemp] = useState(null);
  const [condition, setCondition] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLongitude(position.coords.longitude);
          setLatitude(position.coords.latitude);
          setLocationState(true);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported in this browser.");
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
            setIcon(weatherData.icon);
          } else {
            throw result;
          }
        } catch (error) {
          alert(`실패: ${error.message}`);
        }
      };
      locationSend();
    }
  }, [locationState, longitude, latitude]);

  return (
    <>
      <PageContainer>
        <Header></Header>
        <Content>
          <WheaterContent>
            <WheaterImoge>
              <div>오늘의 날씨는?</div>
              <div>화창한 날씨네요!!</div>
              <div></div>
            </WheaterImoge>
            <WheaterTitle>
              {temp && <div>온도: {temp}</div>}
              {condition && <div>상태: {condition}</div>}
              <WheaterProgress></WheaterProgress>
            </WheaterTitle>
          </WheaterContent>
          <LocationContent></LocationContent>
          <TodoListContent></TodoListContent>
        </Content>
      </PageContainer>
    </>
  );
};

export default Home;
