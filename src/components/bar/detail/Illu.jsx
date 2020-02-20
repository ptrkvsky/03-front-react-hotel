import PropTypes from "prop-types";
import React from "react";

const Illu = ({ alt }) => {
  return <img src="https://picsum.photos/500/?blur" alt={alt} />;
};

export default Illu;

Illu.propTypes = {
  alt: PropTypes.string
};
