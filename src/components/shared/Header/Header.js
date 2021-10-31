import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <h2 className="text-primary">Fantasy Holiday</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              Contact Us
            </Nav.Link>

            {user.email ? (
              <Button
                onClick={logOut}
                className="fs-5 text-light"
                variant="info"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button className="fs-5 text-light" variant="info">
                  Login
                </Button>
              </Link>
            )}

            {/* user name */}
            <Navbar.Text className="text-dark ms-3">
              Logged in as: <p>{user?.displayName}</p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
