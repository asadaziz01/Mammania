import React from 'react';
import './Samples.css'; 
import cookiesImg from '../../images/cookies.jpg';
import brownieImg from '../../images/Brownies.png';
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
          <img src={brownieImg} alt="Mouthwatering Cakes" className="sample-image" />
          <h3 className="sample-heading">MOUTHWATERING BROWNIES</h3>
          <p className="sample-description">Chocolate, double chocolate, caramel, cookie & cheesecakes</p>
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
