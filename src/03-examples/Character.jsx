import PropTypes from "prop-types";

export const Character = ({ species, name }) => {
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{species}</p>
      <footer className="blockquote-footer">{name}</footer>
    </blockquote>
  );
};

Character.propTypes = {
  species: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
