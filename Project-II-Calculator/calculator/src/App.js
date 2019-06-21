import React from 'react';
import './App.css';

import NumberButton from "./components/ButtonComponents/NumberButton.js";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay text="0" />
      <div className="numberButtons">
        <div className="btnRow">
          <ActionButton text="clear" buttonStyle="clearBtn" />
          <ActionButton text=" / " />
        </div>
        <div className="btnRow">
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <ActionButton text="x" />
        </div>
        <div className="btnRow">
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <ActionButton text="-" />
        </div>
        <div className="btnRow">
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <ActionButton text="+" />
        </div>
        <div className="btnRow">
          <ActionButton text="0" buttonStyle="zeroBtn" />
          <ActionButton text="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
