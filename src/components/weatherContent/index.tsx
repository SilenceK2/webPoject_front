import React from "react";
import {
  WeatherIconStyled,
  WeatherTitleStyled,
  WeatherTopSection,
  WeatherTemp,
  WeatherTitleTopSection,
  WeatherBottomSection,
} from "./styles";

interface WeatherContentType {
  id?: string;
  text?: string;
  temp?: string;
  rainCondition?: string;
}

const WeatherContentBox: React.FC<WeatherContentType> = ({
  id,
  text,
  temp,
  rainCondition,
}) => {
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
        <WeatherBottomSection></WeatherBottomSection>
      </WeatherTopSection>
    </>
  );
};
export default WeatherContentBox;
