import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/img.jpg";
import img2 from "../../images/img2.jpg";

const CoxBazar = () => {
  return (
    <>
      <Container className="my-5">
        <h2 className="my-4 text-primary">Bangladesh's Most Beautiful Place</h2>
        <Row>
          <Col md={6}>
            <p>
              Cox's Bazar (/ˌkɒksɪz bəˈzɑː/; Bengali: কক্সবাজার, romanized:
              Kaksabājāra; pronounced [kɔksbadʒaɾ]) is a city, fishing port,
              tourism centre, and district headquarters in southeastern
              Bangladesh. It is famous mostly for its long natural sandy beach.
              It is located 150 km (93 mi) south of the city of Chittagong.
              Cox's Bazar is also known by the name Panowa, which translates
              literally as "yellow flower". Another old name was "Palongkee". It
              has the longest sea beach in the world. The modern Cox's Bazar
              derives its name from Captain Hiram Cox, an officer of the British
              East India Company, a Superintendent of Palongkee outpost. To
              commemorate his role in refugee rehabilitation work, a market was
              established and named after him.
            </p>
          </Col>

          <Col md={6}>
            <img src={img} className="w-100" />
          </Col>
        </Row>
      </Container>

      <Container>
        <h2 className="my-4 text-primary">India's Most Beautiful Place</h2>
        <Row>
          <Col md={6}>
            <img src={img2} className="w-100" />
          </Col>

          <Col md={6}>
            <p>
              The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/;[4] lit. 'Crown of the
              Palace', [taːdʒ ˈmɛːɦ(ə)l]),[5] is an ivory-white marble mausoleum
              on the right bank of the river Yamuna in the Indian city of Agra.
              It was commissioned in 1632 by the Mughal emperor Shah Jahan
              (reigned from 1628 to 1658) to house the tomb of his favourite
              wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.
              The tomb is the centrepiece of a 17-hectare (42-acre) complex,
              which includes a mosque and a guest house, and is set in formal
              gardens bounded on three sides by a crenellated wall. Construction
              of the mausoleum was essentially completed in 1643, but work
              continued on other phases of the project for another 10 years. The
              Taj Mahal complex is believed to have been completed in its
              entirety in 1653 at a cost estimated at the time to be around 32
              million rupees, which in 2020 would be approximately 70 billion
              rupees (about U.S. $1 billion).
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CoxBazar;
