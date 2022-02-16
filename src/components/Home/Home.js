import React from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import Banner from "../Banner/Banner";
import CoxBazar from "../CoxBazar/CoxBazar";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Container className="d-flex justify-content-center mt-5">
                <InputGroup className="w-75">
                    <FormControl placeholder="Search our services" />
                    <Button variant="outline-info" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </Container>
            <Services></Services>
            <CoxBazar></CoxBazar>
            <Reviews></Reviews>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
