import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, newOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order Successful! Your order was ${order}. Please show your confirmation number for pickup.`
    );
  };

  return;
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input
      value={name}
      id="name"
      name="name"
      type="text"
      onChange={(e) => setName(e.target.value)}
    />
    <label htmlFor="phone">Phone Number:</label>
    <input
      value={phone}
      id="phone"
      name="phone"
      type="text"
      onChange={(e) => setPhone(e.target.value)}
    />
    <label htmlFor="address">Address:</label>
    <input
      value={address}
      id="address"
      name="address"
      type="text"
      onChange={(e) => setAddress(e.target.value)}
    />
    <label htmlFor="order">Order Instructions:</label>
    <input
      value={order}
      id="order"
      name="order"
      type="text"
      onChange={(e) => setOrder(e.target.value)}
    />
    <button type="submit" submit="Submit Order" />
  </form>;
}

export default FoodOrderForm;
