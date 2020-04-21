import React from 'react';
import PropTypes from 'prop-types';

// material
import Button from "@material-ui/core/Button";

function Login({onClick}) {
  return (
    <>
      <main>COVID-19 Symptom Tracker</main>
      <footer>
        <Button variant="contained" color="secondary" onClick={onClick}>
          Log In
        </Button>
      </footer>
    </>
  );
}

Login.propTypes = {
  onClick: PropTypes.func
};

export default Login;
