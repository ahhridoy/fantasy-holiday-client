import React from "react";
import { Col, Row } from "react-bootstrap";

const Reviews = () => {
  return (
    <div className="bg-light p-3 m-5 rounded">
      <Row>
        <Col md={4}>
          <h2>700k</h2>
          <p>YouTube Subsribers</p>
        </Col>
        <Col md={4}>
          <h2>2.9m</h2>
          <p>Instagram Followers</p>
        </Col>
        <Col md={4}>
          <h2>900k</h2>
          <p>Page Likes</p>
        </Col>
      </Row>
    </div>
  );
};

export default Reviews;
