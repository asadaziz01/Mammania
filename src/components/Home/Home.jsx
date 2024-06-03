import React from 'react';
import './Home.css';
import brownieImage from '../../images/first.jpg';

export default function Home() {
  return (
    <div className="container">
      <div className="left">
        <h1 className="title">Mammania</h1>
        <p className="subtitle">FOOD SO GOOD, THEY'LL DRIVE</p>
        <p className="subtitle">YOU MAMMA MIA!</p>
        <button className="shop-button">Explore</button>
      </div>
      <div className="right">
        <img src={brownieImage} alt="Brownie" className="brownie-image" />
      </div>
    </div>
  )
}
