import React from 'react';
import './Card.css';

import CardBanner from "./CardBanner";

const CardContent = () => {
  return (
    <div className="cardContent">
      <CardBanner />
      <div className="cardText">
        <h4>Get Started With React</h4>
        <p>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application.
        </p>
        <a href="https://reactjs.org">reactjs.org</a>
      </div>
    </div>
  );
};

export default CardContent;