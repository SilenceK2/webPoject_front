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
            await getWeatherByCurrentLocation(latitude, longitude);
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
            <WheaterImoge></WheaterImoge>
            <WheaterTitle>
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
