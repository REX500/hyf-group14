import React from 'react';
import PropTypes from 'prop-types';

// material
import Button from "@material-ui/core/Button";

// styles
import './style.css';

function Login({onClick}) {
  return (
    <div className="wrapper">
      <main>COVID-19 Symptom Tracker</main>
      <footer>
        <Button variant="contained" color="secondary" onClick={onClick}>
          Log På 
        </Button>
      </footer>
    </div>
  );
}

Login.propTypes = {
  onClick: PropTypes.func
};

export default Login;
