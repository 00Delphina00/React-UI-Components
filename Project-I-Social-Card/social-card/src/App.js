import React from 'react';
import './App.css';
import CardContainer from "./components/CardComponents/CardContainer";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";

const App = () => {
  return (
    <div className="container">
      <ImageThumbnail />
      <div>
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
