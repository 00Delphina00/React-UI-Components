import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  
  return (
    <div>
      {/* <h3>Welcome to React Social Card!</h3> */}
      <HeaderContainer/>
      {/* <p> */}
        {/* Begin by exploring the `components` directory. You'll notice we have a */}
        {/* few files that we've already included in there to get you started right */}
        {/* away building components. You'll need to make sure you include your */}
        {/* components that you build in this file to watch your app come to life */}   
      {/* </p> */}
      <CardContainer/>
      <p>
        {/* <strong></strong> */}
         
          {/* Don't forget to `default export` your components and import them here */}
          {/* inside of this file in order to make them work. */}
      
        React makes it painless to create interactive UIs.  Design simple views for 
        each state in your application.  
        <a href = "https://www.reactjs.org" text-decoration = "none">reactjs.org</a> 

      </p>
    </div>
  );
};

export default App;
