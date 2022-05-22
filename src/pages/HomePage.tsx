import { Container, Row } from "react-bootstrap";
import TopBar from "../components/TopBar";

const HomePage = () => {
  return (
    <Container fluid={true}>
        <Row>
            <TopBar/>
        </Row>
    </Container>
  )
}
export default HomePage;