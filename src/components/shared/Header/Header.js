import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
                sticky="top"
            >
                <Container className="py-2">
                        <Navbar.Brand>
                    <Link to="/" style={{textDecoration: "none"}}>
                            <h2 className="text-primary fw-bold">
                                ~ FANTASY HOLIDAY ~
                            </h2>
                    </Link>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/services">
                            Services
                        </Nav.Link>
                        {user.email ? (
                            <Nav.Link as={Link} to="/myAllOrders">
                                My Orders
                            </Nav.Link>
                        ) : (
                            <> </>
                        )}
                        {user.email ? (
                            <Nav.Link as={Link} to="/addservices">
                                Add Services
                            </Nav.Link>
                        ) : (
                            <> </>
                        )}
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
                                <Button
                                    className="fs-5 text-light"
                                    variant="info"
                                >
                                    Login
                                </Button>
                            </Link>
                        )}

                        {/* user name */}
                        {user?.email && (
                            <Navbar.Text className="text-dark ms-3">
                                Logged in as:{" "}
                                <p className="fw-bold">{user?.displayName}</p>
                            </Navbar.Text>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
