import { Container, Row } from "react-bootstrap";
import Banner from "../components/Banner";
import CategoriesNavBar from "../components/CategoriesNavBar";
import LogoNavBar from "../components/LogoNavBar";
import SearchBar from "../components/SearchBar";
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
        <CategoriesNavBar />
      </Row>
      <Row>
        <Banner />
      </Row>
      <Row>
        <SearchBar />
      </Row>
    </Container>
  );
};
export default HomePage;
