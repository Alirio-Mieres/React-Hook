import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for(let i =0; i< iterationNumber; i++) {
    console.log('Here we go...');
  }

  return `${iterationNumber} iterations done!}`;
}

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setSetshow] = useState(true);

  const meorizeValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <h4>{ meorizeValue }</h4>

      <hr />

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setSetshow(!show)}
      >
        Show/Hidee {JSON.stringify(show)}
      </button>
    </>
  );
};
