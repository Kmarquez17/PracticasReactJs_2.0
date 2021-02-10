import React from "react";
import PropTypes from "prop-types";

const PrimerApp = (props) => {
  const { saludoProps, subSaludoProps } = props;

  const saludo = "Hola bb estoy aqui";
  return (
    <>
      <h1>
        {saludo} {saludoProps}
      </h1>
      <p>Primera app bb</p>
      <p>{subSaludoProps}</p>
    </>
  );
};

PrimerApp.propTypes = {
  saludoProps: PropTypes.string.isRequired,
};

PrimerApp.defaultProps = {
  subSaludoProps: "y tengo dinero :*",
};

export default PrimerApp;
