import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlaceOrder = () => {
  const [service, setService] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  // const handlePlaceOrder = id => {}
  return (
    <div>
      <img src={service.img} />
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      {/* <button onClick={handlePlaceOrder}>Place Order</button> */}
    </div>
  );
};

export default PlaceOrder;
