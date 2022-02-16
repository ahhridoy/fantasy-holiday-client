import React, { useState } from "react";
import emailjs from "emailjs";
import { Alert, Button, Container } from "react-bootstrap";

const Testimonial = () => {
    // const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const sendEmail = (e) => {
        emailjs
            .sendForm(
                "service_dvg6d1l",
                "template_u4iwydl",
                e.target,
                "user_6G3ltyQPq4D913yRocuZG"
            )
            .then((data) => {
                setSuccess(true);
            })
            .catch((err) => {
                setSuccess(false);
            });
        e.preventDefault();
    };

    return (
        <Container className="bg-light py-3">
            <h2 className="pb-2 text-primary fw-bold">Contact With Us</h2>
            <form onSubmit={sendEmail}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="form-control"
                    required
                ></input>{" "}
                <br />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Your email"
                    className="form-control"
                    required
                ></input>{" "}
                <br />
                <textarea
                    name="message"
                    placeholder="Your message"
                    className="form-control"
                    required
                ></textarea>{" "}
                <br />
                <Button
                    value="send"
                    className="form-control"
                    type="submit"
                    variant="info"
                >
                    Send Email
                </Button>
            </form>
            {success && (
                <Alert variant="success">Your Email Send Successfully!</Alert>
            )}
        </Container>
    );
};

export default Testimonial;
