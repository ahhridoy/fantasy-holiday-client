import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { _id, img, name, description } = props.service;
  return (
    <Col md={6} className="my-4">
      <Image src={img} className="w-100" />
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={`/services/placeOrder/${_id}`}>
        <button className="w-100 bg-primary text-white">Book</button>
      </Link>
    </Col>
  );
};

export default Service;
