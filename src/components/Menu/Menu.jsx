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
      <div className="menu-up">
        <img src={menu} alt="Menu" className='menu' />
        <p className='menu-para'>Fill Out the Form or Contact Us!!</p>
        <button onClick={goToHome} className="menu-button">Go to Home</button>
      </div>
    </div>
  )
}

export default Menu
