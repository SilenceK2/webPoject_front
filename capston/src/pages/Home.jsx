
import Header from "../style/stylecomponents/Layout/Header";
import styled from "styled-components";
import { BottomSection, Topsection } from "../style/stylecomponents/LoginStyle";



const PageContainer = styled.div`

  flex-direction: column;
  min-height: 100vh;


`;

const WeatherContent = styled.div`
  padding: 30px;
  margin: 30px;
  flex-direction: column;
  background-color: #41C9E2;
  border-radius : 10px;
  width: 380px;
  height: 210px;  
  display: flex;
`;

const WeatherTop = styled.div`
display: flex;
flex: 1;

`;

const WeatherBottom = styled.div`
display:flex;
flex: 1;
  
  
`;

const WeatherIcon = styled.div`
display: flex;
flex: 0.35;
  width: 100%;

  flex-direction: column;
`;

const WeatherInfo = styled.div`

flex: 0.65;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const WeatherSetTimeBar = styled.div`
flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const GoToContent = styled.div`
padding: 30px;
margin: 30px;
flex-direction: column;
background-color: #41C9E2;
border-radius : 10px;
width: 380px;
height: 210px; 
display: flex;
`

const ToDoContent = styled.div`
padding: 30px;
margin: 30px;
flex-direction: column;
background-color: #41C9E2;
border-radius : 10px;
width: 380px;
height: 210px; 
display: flex;
`
const BottomFooter = styled.div`
  background-color: 41C9E2#;
  flex: 1;
  display: flex;
  width: 500px;
  height: 150px;
  background-color: #;
`

const Home = () => {
  return (
    <>
      <PageContainer>
        <Header>header</Header>
        <BottomSection>     
          <WeatherContent>
            <WeatherTop>
              <WeatherIcon>Weather Icon</WeatherIcon>
              <WeatherInfo>Weather Info</WeatherInfo>
            </WeatherTop>
            <WeatherBottom>
              <WeatherSetTimeBar>Weather Set Time Bar</WeatherSetTimeBar>
            </WeatherBottom>
          </WeatherContent>
          <GoToContent></GoToContent>
          <ToDoContent></ToDoContent>
        </BottomSection>

        <BottomFooter>

        </BottomFooter>
      </PageContainer>
    </>
  );
};

export default Home;
