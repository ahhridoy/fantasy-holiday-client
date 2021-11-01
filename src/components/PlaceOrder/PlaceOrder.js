import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";

const PlaceOrder = () => {
  const [service, setService] = useState({});
  const { user } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);


  const handleAddToCart = (service) => {
    const data = service;
    data.email = user.email;

    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <div>
      <img src={service.img} />
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      <button
        onClick={() => handleAddToCart(service)}
        className="btn w-100 bg-warning"
      >
        Book
      </button>
    </div>
  );
};

export default PlaceOrder;
