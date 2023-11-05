import { useCounter, useFetch } from "../hooks/";
import { Character, LoadingCharacter  } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const { species, name } = !!data && data;

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingCharacter /> : <Character species={species} name={name} />}

      <button
        onClick={() => increment()}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Next Character
      </button>
    </>
  );
};
