import { Container, Row } from "react-bootstrap";
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
    </Container>
  );
};
export default HomePage;
