import PropTypes from "prop-types";
import { memo } from "react";

const CounterB = memo(({ value, Increase }) => {
  console.log("renderB");
  return (
    <>
      <h2>Counter B is {value}</h2>
      <button
        className="border-2 p-1 rounded-lg bg-blue-400"
        onClick={Increase}
      >
        Increase count B
      </button>
    </>
  );
});

CounterB.displayName = "CounterB";
CounterB.propTypes = {
  value: PropTypes.number,
  Increase: PropTypes.func,
};
export default CounterB;
