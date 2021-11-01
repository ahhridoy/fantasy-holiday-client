import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const MyAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // DELETE AN USER
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/deleteOrder/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = orders.filter((order) => order._id !== id);
            setOrders(remainingUsers);
          }
        });
    }
  };

  return (
    <Container>
      <Row>
        {orders.map((order) => (
          <Col md={4}>
            <div className="bg-light p-3 rounded my-5">
              <img src={order.img} className="w-100" />
              <h2>{order.name}</h2>
              <p>{order.description}</p>
              <button
                onClick={() => handleDeleteOrder(order._id)}
                className="btn btn-danger w-100"
              >
                Delete
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyAllOrders;
