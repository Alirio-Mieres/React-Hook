import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setSetshow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter}/>
      </h1>

      <hr />

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={ () => setSetshow(!show) }
      >
        Show/Hidee {JSON.stringify(show)}
      </button>
    </>
  );
};
