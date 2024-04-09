import {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
  useState,
} from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onTick = useEffectEvent(() => {
    setCount(count + increment);
  });

  useEffect(() => {
    console.log("Hello");
    const timerId = setInterval(onTick, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>
        Counter: {count} <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button
          disabled={increment === 0}
          onClick={() => setIncrement((i) => i - 1)}
        >
          -
        </button>
        <b>{increment}</b>
        <button onClick={() => setIncrement((i) => i + 1)}>+</button>
      </p>
    </div>
  );
}
