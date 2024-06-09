import styled from "styled-components";

export const WeatherTopSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100px;
  margin: 0 20px;
`;

export const WeatherTitleTopSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 90%;
`;

export const WeatherBottomSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  & > div {
    border-radius: 20px;
    border: 5px solid rgb(165, 159, 255);
    width: 100%;
    margin-top: 30px;
  }
`;

export const WeatherTitleStyled = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
`;

export const WeatherIconStyled = styled.div`
  background-image: url("/images/openweathermap/${(props) => props.id}.svg");
  width: 40%;
  height: 120px;
  justify-content: flex-start;
  background-repeat: no-repeat;
`;

export const WeatherTemp = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
  padding: 20px;
  & > div:nth-child(1) {
    font-size: 24px;
    font-weight: boler;
  }
  & > div:nth-child(2) {
    font-size: 14px;
    font-weight: lighter;
  } // font-size: 15px;
  // font-weight: light;
  // color: gray;
`;
