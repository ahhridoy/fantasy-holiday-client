import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  // hooks
  const {signInUsingGoogle} = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
      signInUsingGoogle().then((result) => {
          history.push(redirectUrl);
      });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={12} className="login-input mb-4">
          <h2 className="fw-bold">Login</h2> <br />
          {/* login form */}
          <form>
            <input
              className="w-50"
              type="email"
              placeholder="Enter Email"
              required
            />{" "}
            <br /> <br />
            <input
              className="w-50"
              type="password"
              placeholder="Enter Password"
              required
            />{" "}
            <br /> <p className="text-danger"></p>
            <br />
            <Button
              className="w-50 text-light"
              variant="info"
            >
              Login
            </Button>{" "}
            <br />
          </form>
          <p>
            New to Fantasy Holiday? <Link to="/register">Create Account</Link>
          </p>
          {/* buttons */}
          <Button
            onClick={handleGoogleSignIn}
            className="w-50 me-2"
            variant="warning"
          >
            Google Sign In
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
