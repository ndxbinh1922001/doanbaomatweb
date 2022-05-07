import Button  from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const About = () =>{
    return (
        <Row className="mt-5">
            <Col className="text-center">
                <Button variant="primary"
                href="https://www.facebook.com/profile.php?id=100011912614238"
                size='lg'>
                    Visit my profile on Facebook
                </Button>
            </Col>
        </Row>
    )
}
export default About