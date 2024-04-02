import Footer from "../style/stylecomponents/Layout/Footer";
import Header from "../style/stylecomponents/Layout/Header";
import styled from "styled-components";
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <>
      <PageContainer>
        <Header>header</Header>
        <Content></Content>
        <Footer></Footer>
      </PageContainer>
    </>
  );
};

export default Home;
