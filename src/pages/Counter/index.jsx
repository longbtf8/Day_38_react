import { useCallback, useState } from "react";
import CounterA from "../../components/CounterA";
import CounterB from "../../components/CounterB";

function Counter() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const handleIncreaseA = useCallback(() => {
    setValueA((prev) => prev + 1);
  }, []);
  const handleIncreaseB = useCallback(() => {
    setValueB((prev) => prev + 1);
  }, []);
  return (
    <>
      <CounterA value={valueA} Increase={handleIncreaseA} />

      <CounterB value={valueB} Increase={handleIncreaseB} />
    </>
  );
}
export default Counter;
