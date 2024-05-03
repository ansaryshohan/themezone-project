import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-75" />
        </NavLink>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" ">
              <Nav.Link>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "orangeText" : "whiteText"
                  }
                >
                  {" "}
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    isActive ? "orangeText" : "whiteText"
                  }
                >
                  {" "}
                  Courses
                </NavLink>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "orangeText" : "whiteText"
                  }
                >
                  Services
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive ? "orangeText" : "whiteText"
                  }
                >
                  Portfolio
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "orangeText" : "whiteText"
                  }
                >
                  Contact
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "orangeText" : "whiteText"
                  }
                >
                  About
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
