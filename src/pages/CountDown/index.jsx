import { useEffect, useState } from "react";

function CountDown() {
  const [value, setValue] = useState(10);
  useEffect(() => {
    if (value <= 0) return;
    const ValueDown = setInterval(() => {
      setValue((prev) => {
        if (prev <= 1) {
          clearInterval(ValueDown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(ValueDown);
    };
  }, [value]);
  return (
    <div className="p-4">
      <h1 className="text-xl">Count is {value > 0 ? value : "0"}</h1>
      <button
        onClick={() => {
          setValue(10);
        }}
        className="border-2 p-1 rounded-xl bg-blue-400 cursor-pointer"
      >
        Reset
      </button>
    </div>
  );
}
export default CountDown;
