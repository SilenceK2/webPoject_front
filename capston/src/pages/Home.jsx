import Header from "../style/stylecomponents/Layout/Header";
import styled from "styled-components";
import { BottomSection, Topsection } from "../style/stylecomponents/LoginStyle";
import React, { useState,useEffect } from "react";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
`;

const WeatherTitle = styled.div`
  padding: 0px 0px 0px 30px;
  margin: 10px;
`;

const WeatherContent = styled.div`
  padding: 20px 10px 20px 10px;
  color: white;
  margin: 10px 30px 10px 30px;
  flex-direction: column;
  border-radius: 7px;
  width: 420px;
  max-width: 500px;
  height: 300px;
  display: flex;
  border-color: red;
  background: linear-gradient(
    to right bottom,
    ${props => props.selectedTime >= 7 ? "#000033" : "#87CEEB"},
    ${props => props.selectedTime <= 7
      ? `rgb(${(props.selectedTime/12)*135},${(props.selectedTime/12)*206},${(props.selectedTime/12)*250})`
      : `rgb(${(24-props.selectedTime)/12*135},${(24-props.selectedTime)/12*206},${(24-props.selectedTime)/12*250})`
    },
     
    ${props => props.selectedTime <= 20 ? "#000033" : "#87CEEB"}
  );
`;

const WeatherTop = styled.div`
  display: flex;
  flex: 1;
`;

const WeatherBottom = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  
`;

const WeatherIcon = styled.div`
  flex-grow: 1; /* WeatherTop 내에서의 비율 조절 */
`;

const WeatherInfo = styled.div`
  flex-grow: 3; /* WeatherTop 내에서의 비율 조절 */
`;

const WeatherSetTimeBar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WeatherSetTimeBarContent = styled.input.attrs({
  type: "range",
  min: 0,
  max: 24,
  step: 1,
})`
  width: 100%;
  justify-content: center;
  

  
`;

const BarLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  justify-content: center;
`;

const BarLabel = styled.div`
  text-align: center;
  width: 60px;
`;

const GoToContent = styled.div`
  padding: 30px;
  margin: 30px;
  flex-direction: column;
  background-color: #41c9e2;
  border-radius: 10px;
  width: 380px;
  height: 210px;
`;

const ToDoContent = styled.div`
  padding: 30px;
  margin: 30px;
  flex-direction: column;
  background-color: #41c9e2;
  border-radius: 10px;
  width: 380px;
  height: 210px;
`;

const BottomFooter = styled.div`
  background-color: 41c9e2#;
  flex: 1;
  display: flex;
  width: 500px;
  height: 150px;
`;

const Home = () => {
  const [selectedTime, setSelectedTime] = useState(12);

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    setSelectedTime(currentHour);
  }, []); // useEffect를 한 번만 호출하려면 의존성 배열을 빈 배열로 지정합니다.


  const handleTimeChange = (e) => {
    setSelectedTime(parseInt(e.target.value));
  };

  const generateLabels = () => {
    const labels = [];
    for (let i = 1; i <= 24; i += 3) {
      let time;
      if (i === 0) {
        time = '12 AM';
      } else if (i < 12) {
        time = `${i}  AM`;
      } else if (i === 12) {
        time = '12 PM';
      } else {
        time = `${i - 12} PM`;
      }
      labels.push(<BarLabel key={i}>{time}</BarLabel>);
    }
    return labels;
  };
  

  // const generateLabels = () => {
  //   const labels = [];
  //   for (let i = 1; i <= 24; i += 3) {
  //     labels.push(<BarLabel key={i}>{i}시</BarLabel>);
  //   }
  //   return labels;
  // };

  return (
    <>
      <PageContainer>
        <Header>header</Header>
        <BottomSection>
          <WeatherTitle>오늘의 날씨</WeatherTitle>
          <WeatherContent selectedTime={selectedTime}>
            <WeatherTop>
              <WeatherIcon>Weather Icon</WeatherIcon>
              <WeatherInfo>Weather Info</WeatherInfo>
            </WeatherTop>
            <WeatherBottom>
              <WeatherSetTimeBar>
              <BarLabelContainer>{generateLabels()}</BarLabelContainer>
                <WeatherSetTimeBarContent
                  value={selectedTime}
                  onChange={handleTimeChange}
                />
                <div>{selectedTime}시</div>
              </WeatherSetTimeBar>
            </WeatherBottom>
          </WeatherContent>
          <GoToContent></GoToContent>
          <ToDoContent></ToDoContent>
        </BottomSection>
        <BottomFooter></BottomFooter>
      </PageContainer>
    </>
  );
};

export default Home;
