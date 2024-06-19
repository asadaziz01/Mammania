import React from 'react';
import { useNavigate } from 'react-router-dom';
import menu from '../../images/Menu2.jpg';
import "./Menu.css"; 

function Menu() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className='menu-container'>
      <div className="menu-left">
        <img src={menu} alt="Menu" className='menu' />
      </div>
      <div className="menu-right">
        <p className='menu-para'>Contact Us!!</p>
        <button onClick={goToHome} className="menu-button">Go to Home</button>
      </div>
    </div>
  )
}

export default Menu
