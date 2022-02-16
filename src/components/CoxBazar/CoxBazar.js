import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/img.jpg";
import img2 from "../../images/img2.jpg";

const CoxBazar = () => {
    return (
        <>
            <div className="bg-light p-3">
                <Container className="my-5">
                    <h2 className="my-4 text-primary fw-bold">
                        Bangladesh's Most Beautiful Place
                    </h2>
                    <Row>
                        <Col md={6}>
                            <img src={img} alt="img1" className="w-100" />
                        </Col>
                        <Col md={6}>
                            <p>
                                Cox’s Bazar is a town on the southeast coast of
                                Bangladesh. It’s known for its very long, sandy
                                beachfront, stretching from Sea Beach in the
                                north to Kolatoli Beach in the south. Aggameda
                                Khyang monastery is home to bronze statues and
                                centuries-old Buddhist manuscripts. South of
                                town, the tropical rainforest of Himchari
                                National Park has waterfalls and many birds.
                                North, sea turtles breed on nearby Sonadia
                                Island. Cox’s Bazar is a town on the southeast
                                coast of Bangladesh. It’s known for its very
                                long, sandy beachfront, stretching from Sea
                                Beach in the north to Kolatoli Beach in the
                                south. Aggameda Khyang monastery is home to
                                bronze statues and centuries-old Buddhist
                                manuscripts. South of town, the tropical
                                rainforest of Himchari National Park has
                                waterfalls and many birds. North, sea turtles
                                breed on nearby Sonadia Island.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <h2 className="my-4 text-primary fw-bold">
                        India's Most Beautiful Place
                    </h2>
                    <Row>
                        <Col md={6}>
                            <p>
                                The Taj Mahal, is an ivory-white marble
                                mausoleum on the right bank of the river Yamuna
                                in the Indian city of Agra. It was commissioned
                                in 1632 by the Mughal emperor Shah Jahan to
                                house the tomb of his favourite wife, Mumtaz
                                Mahal; it also houses the tomb of Shah Jahan
                                himself.The Taj Mahal, is an ivory-white marble
                                mausoleum on the right bank of the river Yamuna
                                in the Indian city of Agra. It was commissioned
                                in 1632 by the Mughal emperor Shah Jahan to
                                house the tomb of his favourite wife, Mumtaz
                                Mahal; it also houses the tomb of Shah Jahan
                                himself.The Taj Mahal, is an ivory-white marble
                                mausoleum on the right bank of the river Yamuna
                                in the Indian city of Agra. It was commissioned
                                in 1632 by the Mughal emperor Shah Jahan to
                                house the tomb of his favourite wife, Mumtaz
                                Mahal; it also houses the tomb of Shah Jahan
                                himself.
                            </p>
                        </Col>
                        <Col md={6}>
                            <img src={img2} alt="img2" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default CoxBazar;
