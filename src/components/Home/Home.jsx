import React from 'react';
import './Home.css';
import brownieImage from '../../images/first.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <div className="left">
        <h1 className="title">Mammania</h1>
        <p className="subtitle">FOOD SO GOOD, THEY'LL DRIVE</p>
        <p className="subtitle">YOU MAMMA MIA!</p>
        <Link to="/menu"><button className="shop-button">Explore Menu</button></Link>
      </div>
      <div className="right">
        <img src={brownieImage} alt="Brownie" className="brownie-image" />
      </div>
    </div>
  )
}
