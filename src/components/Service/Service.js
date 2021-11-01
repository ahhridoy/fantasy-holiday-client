import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { _id, img, name, description, } = props.service;
  return (
    <Col md={6} className="my-4">
      <div className="bg-light rounded p-3">
        <Image src={img} className="w-100" />
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to={`/placeOrder/${_id}`}>
          <button className="btn btn-primary w-100">See Details</button>
        </Link>
        {/* <button onclick="" className="btn btn-danger w-100">Delete</button> */}
      </div>
    </Col>
  );
};

export default Service;
