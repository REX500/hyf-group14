import React, { Component } from "react";
import PropTypes from "prop-types";

import "./style.css";

import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

class Symptoms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Nej",
      isFirstPage: true,
      isFlag: true,
      firstPage: true,
      isFirstPageValid: false,
      /**
       * firstPage: true
       *
       */
    };

    this.onRadioChange = this.onRadioChange.bind(this);
    this.handleFirstPageClick = this.handleFirstPageClick.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  onRadioChange = (e) => {
    // object deconstruction
    const { target } = e; // {...target: {value: "Ja"/"Nej"}..}
    // const { target: { value } } = e;

    const value = target.value;
    // const {value} = target;

    this.setState({
      value,
      // value: value, - whenever the key and value var are named the same you can write it shorter
      // if "Ja" chosen, set first page as valid
      isFirstPageValid: value === "Ja", // this check will return either true or false so no need to do value === 'Ja' ? true : false
      // isFirstPageValid: value === 'Ja' ? true : false
    });
  };

  handleFirstPageClick = () => {
    // setting state using IIFE (immedietely invoked function expression)
    // instead of passing a json
    // here you get previous state at the time of function being ran/executed
    this.setState((prevState) => ({ firstPage: !prevState.isFirstPageValid }));

    // here you were passing a json
    // not ideal because this.state.isFirstPageValid could change
    // this.setState({ firstPage: !this.state.isFirstPageValid });
  };

  // this is a wrapper function that determined what a button click should do
  // if we're on the first page, call handleFirstPageClick, if we're on the second page call onClick passed through props
  _handleClick() {
    const { firstPage } = this.state;
    const { onClick } = this.props;

    if (firstPage) this.handleFirstPageClick();
    else onClick();
  }

  render() {

    return (
      <FormControl component="fieldset" name="firstPage">
        <div className="wraper">
          <h2>
            {this.state.firstPage ? 'Har du Hoste?' : 'Har du Fiber?'}
          </h2>

          <RadioGroup value={this.state.value} onChange={this.onRadioChange}>
            <FormControlLabel value="Ja" control={<Radio />} label="Ja" />
            <FormControlLabel value="Nej" control={<Radio />} label="Nej" />
          </RadioGroup>

          <footer>
            <Button
              variant="contained"
              color="secondary"
              onClick={this._handleClick}
            >
              {/* try to write this shorter */}
              {/* you can probably do it because "Gå til næste" appears twice in both if statements */}
              {this.state.firstPage
                ? this.state.isFirstPageValid
                  ? "Gå til næste"
                  : "Ikke at bekymre sig"
                : 'Gå til næste'
              }
            </Button>
          </footer>
        </div>

        {/* {this.state.firstPage ? (
          // this.state.firstPage
          <div className="wraper">
            <h2>Har du Hoste?</h2>
            <RadioGroup value={this.state.value} onChange={this.onRadioChange}>
              <FormControlLabel value="Ja" control={<Radio />} label="Ja" />
              <FormControlLabel value="Nej" control={<Radio />} label="Nej" />
            </RadioGroup>
            <footer>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  this.handleClick();
                }}
              >
                {this.state.isFirstPageValid
                  ? "Gå til næste"
                  : "Ikke at bekymre sig"}
              </Button>
            </footer>
          </div>
        ) : (
          <div className="wraper">
            <h2>Har du Fiber?</h2>
            <RadioGroup value={this.state.value} onChange={this.onRadioChange}>
              <FormControlLabel value="Ja" control={<Radio />} label="Ja" />
              <FormControlLabel value="Nej" control={<Radio />} label="Nej" />
            </RadioGroup>
            <footer>
              <Button variant="contained" color="secondary" onClick={onClick}>
                Gå til næste
              </Button>
            </footer>
          </div>
        )} */}
      </FormControl>
    );
  }
}

Symptoms.propTypes = {
  onClick: PropTypes.func,
};

export default Symptoms;
