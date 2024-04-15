import React from "react";
import {
  WeatherIconStyled,
  WeatherTitleStyled,
  WeatherTopSection,
  WeatherTemp,
  WeatherTitleTopSection,
  WeatherBottomSection,
} from "./styles";

const Weather = ({ id, text, temp, rainCondition }) => {
  return (
    <>
      <WeatherTopSection>
        <WeatherTitleStyled>{text}</WeatherTitleStyled>
        <WeatherTitleTopSection>
          <WeatherIconStyled id={id}></WeatherIconStyled>
          <WeatherTemp>
            <div>{temp}°C</div>
            <div>강수확률 {rainCondition}%</div>
          </WeatherTemp>
        </WeatherTitleTopSection>
        <WeatherBottomSection>
          <div></div>
        </WeatherBottomSection>
      </WeatherTopSection>
    </>
  );
};
export default Weather;
