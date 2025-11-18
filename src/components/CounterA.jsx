import PropTypes from "prop-types";
import { memo } from "react";

const CounterA = memo(({ value, Increase }) => {
  console.log("renderA");
  return (
    <>
      <h2>Count A is {value}</h2>
      <button
        className="border-2 p-1 rounded-lg bg-blue-400"
        onClick={Increase}
      >
        Increase count A
      </button>
    </>
  );
});
CounterA.propTypes = {
  value: PropTypes.number,
  Increase: PropTypes.func,
};
CounterA.displayName = "CounterA";

export default CounterA;
