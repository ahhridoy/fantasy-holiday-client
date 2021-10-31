import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
    // // hooks
    const {signInUsingGoogle} = useAuth();
    return (
        <Container className="mt-4">
            <Row>
                <Col md={12} className="login-input mb-4">
                    <h2 className="fw-bold">Create Account</h2> <br />

                    {/* register form */}
                    <form>
                        <input
                            className="w-50"
                            type="email"
                            placeholder="Enter Name"
                            required
                        />{" "}
                        <br /> <br />
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
                        <br /> <br />
                        <Button
                            className="w-50 text-light"
                            variant="info"
                        >
                            Register 
                        </Button>{" "}
                        <br />
                    </form>

                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>

                    {/* buttons */}
                    <Button
                        onClick={signInUsingGoogle}
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

export default Register;