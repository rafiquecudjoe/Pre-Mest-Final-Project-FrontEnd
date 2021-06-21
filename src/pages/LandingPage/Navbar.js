import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "./Banner/img/expresslogo2.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { lazy } from "react";

const LoginPAge =lazy(()=>import('../Login'))

function NavbarCom() {
  const history = useHistory();

  const lg = () => {
    history.push('/login');
  };

  const sg = () => {
    history.push("/signup");
  };



  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img src={logo} alt="logo" height="80%" width="80%" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="me-auto justify-content-center"
        >
          <Nav className="me-auto justify-content-end">
            <Link>
              <Nav>
                <span className="link">HOME</span>
              </Nav>
            </Link>
            <Link>
              <Nav>
                <span className="link">PRICING</span>
              </Nav>
            </Link>
            <Link>
              <Nav>
                {" "}
                <span className="link">TRACKING</span>
              </Nav>
            </Link>
            <Link>
              <Nav>
                <span className="link">ABOUT US</span>
              </Nav>
            </Link>
            <Link>
              <Nav>
                <span className="link">CONTACT US</span>
              </Nav>
            </Link>
          </Nav>
          <Button className="ml-5" onClick={lg} >LOGIN</Button>
          <Button className="ml-5" onClick={sg}>SIGNUP</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCom;
