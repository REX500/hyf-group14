import React from "react";
import PropTypes from "prop-types";

// material ui
import Button from "@material-ui/core/Button";

// styles
import './style.css';

const Final = ({ onClick }) => {
  return (
    <div className="wrapper">
      <h2>Tak!</h2>
      <Button variant="contained" color="secondary" onClick={onClick}>
        Tilbage
      </Button>
    </div>
  );
};

Final.propTypes = {
  onClick: PropTypes.func,
};

export default Final;
