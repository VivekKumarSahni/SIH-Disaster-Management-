import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
// import './navbar.css'

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <a class="navbar-brand" href="/">
          <img src="https://yt3.googleusercontent.com/ytc/AOPolaQGbEJcg1RTYwjZTh8P_DCC52aykKl95rdAjjRBxQ=s900-c-k-c0x00ffffff-no-rj" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
          RescueConnect
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#link">Link</Nav.Link> */}

            <NavDropdown
              title="Agency"
              id="basic-nav-dropdown"
              style={{
                position: "absolute",
                right: 160,
                top: "2%",
              }}
            >
              <NavDropdown.Item href="/registerAgency"> Register</NavDropdown.Item>
              <NavDropdown.Item href="/loginAgency">
                Login
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider /> */}
            </NavDropdown>
            <NavDropdown
              title="User"
              id="basic-nav-dropdown"
              style={{
                position: "absolute",
                right: 90,
                top: "2%",
              }}
            >
              <NavDropdown.Item href="/registerUser"> Register</NavDropdown.Item>
              <NavDropdown.Item href="/loginUser">
                Login
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
