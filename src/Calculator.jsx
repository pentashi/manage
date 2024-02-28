// src/Calculator.js
import React, { useState } from 'react';
const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('0');
      setExpression('');
    } else if (value === '=') {
      try {
        const result = eval(expression);
        setDisplay(result.toString());
        setExpression('');
      } catch (error) {
        setDisplay('Error');
        setExpression('');
      }
    } else {
      setDisplay((prevDisplay) => (prevDisplay === '0' ? value : prevDisplay + value));
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const renderButtons = () => {
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C',
    ];

    return buttons.map((button) => (
      <button key={button} onClick={() => handleButtonClick(button)}>
        {button}
      </button>
    ));
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">{renderButtons()}</div>
    </div>
  );
};

export default Calculator;
