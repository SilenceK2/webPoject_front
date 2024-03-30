import Footer from "../widget/stylecomponents/Footer";
import Header from "../widget/stylecomponents/Header";
import styled from "styled-components";
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Content = styled.div`
  flex: 1;
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
