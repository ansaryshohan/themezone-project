import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../public/logo.png";

function NavBar() {
  const [scrollColor, setScrollColor] = useState(false);

  const colorChange = () => {
    if (window.scrollY >= 120) {
      setScrollColor(true);
    } else {
      setScrollColor(false);
    }
  };
  // window.addEventListener("scroll", colorChange);

  useEffect(() => {
    window.addEventListener("scroll", colorChange);
    return () => {
      window.removeEventListener("scroll", colorChange);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={
        scrollColor ? "bg-primary fixed-top " : "bg-transparent fixed-top "
      }
    >
      <Container className="d-md-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="w-75" />
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" ">
              <Nav.Link href="#features" className="whiteText">
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" className="whiteText">
                Pricing
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="whiteText">
                More deets
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="whiteText">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
