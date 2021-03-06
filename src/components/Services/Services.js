import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://safe-scrubland-89020.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <Container>
            <h2 className="mt-4 text-primary fw-bold">Our Services</h2>
            <Row>
                {services.map((service) => (
                    <Service key={service.id} service={service}></Service>
                ))}
            </Row>
        </Container>
    );
};

export default Services;
