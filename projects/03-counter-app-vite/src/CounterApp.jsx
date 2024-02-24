import PropTypes from "prop-types";
import { useState } from "react";

const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(prev => prev + 1);
  };

  const handleSubstract = () => {
    setCounter(prev => prev - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button type="button" onClick={handleSubstract}>-1</button>
      <button type="button" onClick={handleAdd}>+1</button>
      <button aria-label="btn-reset" type="button" onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
