import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/navbar.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="">
      <Container fluid className="ps-4">
        <Navbar.Brand>CIMIEL s.r.o.</Navbar.Brand>
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto "></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
