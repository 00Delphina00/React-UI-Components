import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      {/* <h3>Welcome to React Social Card!</h3> */}
      <h3><strong>Lambda School</strong> @LambdaSchool*{Let today = new Date;  today.toDateString()}</h3>
      <p>
        {/* Begin by exploring the `components` directory. You'll notice we have a */}
        {/* few files that we've already included in there to get you started right */}
        {/* away building components. You'll need to make sure you include your */}
        {/* components that you build in this file to watch your app come to life */}
        Let's learn React by building simple interfaces with components.  Don't try to
        overthink it, just keep it simple and have fun.  One you feel comfortable using      
        components you are well on your way to mastering React!      
      </p>
      <img src = "./social-card/public/favicon.ico" alt = "atom model"/>
      <p>
        <strong>
          Get Started With React
          {/* Don't forget to `default export` your components and import them here */}
          {/* inside of this file in order to make them work. */}
        </strong>
        React makes it painless to create interactive UIs.  Design simple views for 
        each state in your application.  
        <a href = "https://www.reactjs.org" text-decoration = "none">reactjs.org</a> 

      </p>
    </div>
  );
};

export default App;
