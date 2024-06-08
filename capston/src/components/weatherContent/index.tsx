import React from "react";
import { weatherSelector } from "../../utils/recoil/atom";
import {
  WeatherIconStyled,
  WeatherTitleStyled,
  WeatherTopSection,
  WeatherTemp,
  WeatherTitleTopSection,
  WeatherBottomSection,
} from "./styles";
import { useRecoilValue } from "recoil";

// interface WeatherContentType {
//   id?: string;
//   text?: string;
//   temp?: string;
//   rainCondition?: string;
// }

const WeatherContentBox = () => {
  const weatherValue = useRecoilValue(weatherSelector);
  console.log(weatherValue);
  const { text, id, temp, rainCondition }: any = weatherValue;
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
