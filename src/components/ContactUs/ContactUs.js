import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const ContactUs = () => {
    
    return (
        <Container>
            <Row>
                <Col md={12}>
                    {/* contact details */}
                    <h1 className="fw-bold mt-5 mb-3">Contact Details</h1>
                    <h3 className="text-info"><a href="#">+0800 2336 7820</a></h3>
                    <h3 className="text-info"><a href="#">sussie.wolffantasyholiday.com</a></h3>
                    <h3 className="text-info"><a href="#">Book Our Service</a></h3> <br /> <br />
                    
                    <p>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Quis nostrud exerci tation ulla. Ut wisi enim ad minim veniam. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;