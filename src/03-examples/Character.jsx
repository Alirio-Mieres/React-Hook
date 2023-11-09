import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const Character = ({ species, name }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({
    with: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({height, width});

  }, [name]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p className="mb-1">{species}</p>
        <footer ref={pRef} className="blockquote-footer">
          {name}
        </footer>
      </blockquote>

      <code>{  JSON.stringify(boxSize) }</code>
    </>
  );
};

Character.propTypes = {
  species: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
