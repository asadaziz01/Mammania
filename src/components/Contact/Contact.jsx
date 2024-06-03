import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="contact-title">Looking forward to hear from you</h2>
        <p className="contact-heart">♡</p>
      </div>
      <div className="contact-right">
        <p className="contact-item"><strong>MAIN SHOP</strong><br/>Whitefield, Blr</p>
        <p className="contact-item"><strong>INSTAGRAM</strong><br/><span>@</span>mammania</p>
        <p className="contact-item"><strong>PHONE NUMBER</strong><br/><span>8340273835</span></p>
      </div>
    </div>
  )
}

export default Contact

