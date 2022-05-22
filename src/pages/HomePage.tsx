import { Container, Row } from "react-bootstrap";
import Banner from "../components/Banner";
import LogoNavBar from "../components/LogoNavBar";
import TopBar from "../components/TopBar";

const HomePage = () => {
  return (
    <Container fluid={true}>
      <Row>
        <TopBar />
      </Row>
      <Row>
        <LogoNavBar />
      </Row>
      <Row>
        <Banner />
      </Row>
    </Container>
  );
};
export default HomePage;
