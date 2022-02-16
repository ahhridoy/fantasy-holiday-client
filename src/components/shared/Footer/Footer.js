import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        // Footer Area
        <div className="bg-dark mt-5 py-4">
            <Container>
                <h4 className="text-primary mb-3">Fantasy Holiday</h4>
                <div className="row">
                    {/* Address */}
                    <div className="col-md-4">
                        <p className="text-light fw-bold">Address</p>
                        <p className="text-light">
                            Los Angeles 90001, California, US
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-md-4">
                        <p className="text-light fw-bold">Follow Us</p>
                        <a href="https://facebook.com/juniorhridoyofficial" style={{textDecoration: "none"}}>
                            Facebook
                        </a>{" "}
                        <br />
                        <a href="https://instagram.com/ahhridoyy" style={{textDecoration: "none"}}>
                            Instagram
                        </a>{" "}
                        <br />
                        <a href="https://twitter.com/ahhridoyy" style={{textDecoration: "none"}}>Twitter</a >
                    </div>

                    {/* Programming Languages */}
                    <div className="col-md-4">
                        <p className="text-light fw-bold">Our Services</p>
                        <small className="text-light">
                            Camping Area for Tents
                        </small>{" "}
                        <br />
                        <small className="text-light">
                            Caravan Solor Tents
                        </small>{" "}
                        <br />
                        <small className="text-light">
                            Small Cavin Wood
                        </small>{" "}
                        <br />
                    </div>
                </div>
                <div className="pt-4">
                    <small className="text-light">
                        {" "}
                        2021 All rights reserved.
                    </small>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
