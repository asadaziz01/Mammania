import React from 'react';
import './Delivery.css';
import deliveryImage from '../../images/delivery.jpg';

export default function Delivery() {
  return (
    <div className="container-delivery">
      <div className="left-delivery">
        <img src={deliveryImage} alt="Brownie" className="delivery-image" />
      </div>
      <div className="right-delivery">
        <h1 className="title-delivery">We deliver anywhere!</h1>
        <button className="shop-button-delivery">Click here for the order form</button>
      </div>
    </div>
  )
}
