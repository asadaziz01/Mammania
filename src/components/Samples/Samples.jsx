import React from 'react';
import './Samples.css'; 
import cookiesImg from '../../images/cookies.jpg';
import cakesImg from '../../images/cakes.jpg';
import pizzaImg from '../../images/pizza.jpg';

const Samples = () => {
  return (
    <div className="samples-container">
      <h2 className="samples-title">Other baked goods</h2>
      <div className="samples-grid">
        <div className="sample-item">
          <img src={cookiesImg} alt="Yummy Cookies" className="sample-image" />
          <h3 className="sample-heading">YUMMY COOKIES</h3>
          <p className="sample-description">Chocolate chip, double chocolate & peanut butter flavors</p>
        </div>
        <div className="sample-item">
          <img src={cakesImg} alt="Mouthwatering Cakes" className="sample-image" />
          <h3 className="sample-heading">MOUTHWATERING CAKES</h3>
          <p className="sample-description">Chocolate, red velvet, carrot choco lava & cheesecakes</p>
        </div>
        <div className="sample-item">
          <img src={pizzaImg} alt="Freshly Baked Pizza" className="sample-image" />
          <h3 className="sample-heading">FRESHLY BAKED PIZZA</h3>
          <p className="sample-description">Classic Margherita, tandoori paneer, chicken sausage, chicken tikka, garlic bread, Pizza pocket</p>
        </div>
      </div>
    </div>
  );
};

export default Samples;
