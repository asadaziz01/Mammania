import React from 'react';
import './NotFoundErrorPage.css'; 
import { useNavigate } from 'react-router-dom';

const NotFoundErrorPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/Mammania');
  };
  return (
    <div className="error-container">
      <h1>Error 404!!</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={goToHome} className="home-button">Go to Home</button>
    </div>
  );
};

export default NotFoundErrorPage;