import React from 'react';
import './Delivery.css';
import deliveryImage from '../../images/delivery.jpg';
import { Link } from 'react-router-dom';

export default function Delivery() {
  return (
    <div className="container-delivery">
      <div className="left-delivery">
        <img src={deliveryImage} alt="Brownie" className="delivery-image" />
      </div>
      <div className="right-delivery">
        <h1 className="title-delivery">We deliver anywhere!</h1>
        <Link to="/Mammania/menu"><button className="shop-button-delivery">Explore Menu</button></Link>
        <h4>- Order Now -</h4>
        <div className="orderSite">
          <Link to="https://www.instagram.com/mammania" target="_blank"><button className="shop-button-delivery instagram">Order On Instagram</button></Link>
          <Link to="https://wa.me/918797839792" target="_blank"><button className="shop-button-delivery">Order On WhatsApp</button></Link>
        </div>
      </div>
    </div>
  )
}
