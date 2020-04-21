import React, { Component } from "react";
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
    };
    this.onRadioChange = this.onRadioChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onRadioChange = (e) => {
    this.setState({
      value: e.target.value,
      isFirstPage: e.target.value === "Nej" ? true : false,
    });
  };

  handleClick = () => {
    this.setState({ isFlag: this.state.isFirstPage });
    console.log(this.state);
  };

  render() {
    return (
      <FormControl component="fieldset" name="firstPage">
        {this.state.isFlag ? (
          <div className="wraper">
            <h2>Har du Hoste?</h2>
            <RadioGroup value={this.state.value} onChange={this.onRadioChange}>
              <FormControlLabel value="Ja" control={<Radio />} label="Ja" />
              <FormControlLabel value="Nej" control={<Radio />} label="Nej" />
            </RadioGroup>
            <footer>
              <br></br>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  this.handleClick();
                }}
              >
                {this.state.isFirstPage
                  ? "Ikke at bekymre sig"
                  : "Gå til næste"}
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
            <br></br>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  this.handleClick();
                }}
              >
                Færdig
              </Button>
            </footer>
          </div>
        )}
      </FormControl>
    );
  }
}

export default Symptoms;
