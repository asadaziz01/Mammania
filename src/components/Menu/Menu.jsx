import React from 'react';
import menu from '../../images/Menu.png';
import "./Menu.css"; 

function Menu() {
  return (
    <div className='menu-container'>
      <img src={menu} alt="Menu" className='menu' />
    </div>
  )
}

export default Menu
