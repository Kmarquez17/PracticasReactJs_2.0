import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  const handleDelete = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter APP</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDelete}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
CounterApp.defaultProps = {
  value: 22,
};

export default CounterApp;
