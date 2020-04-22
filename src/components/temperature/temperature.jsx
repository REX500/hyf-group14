import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

// material
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";


class Temperature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Under 38°C"
    };
    this.onRadioChange = this.onRadioChange.bind(this);
  }

  onRadioChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { onClick } = this.props;
    return (
      <FormControl component="fieldset" >
          <div className="wraper">
            <h2>Temperatur!</h2>
            <RadioGroup value={this.state.value} onChange={this.onRadioChange}>
              <FormControlLabel value="Under 38°C" control={<Radio />} label="Under 38°C" />
              <FormControlLabel value="39°C" control={<Radio />} label="39°C" />
              <FormControlLabel value="40°C" control={<Radio />} label="40°C" />
              <FormControlLabel value="41°C" control={<Radio />} label="41°C" />
              <FormControlLabel value="42°C" control={<Radio />} label="42°C" />
              <FormControlLabel value="Above 42°C" control={<Radio />} label="Over 42°" />
            </RadioGroup>
            <Button variant="contained" color="secondary" onClick={onClick} >
                Færdig
              </Button>
          </div>
        
      </FormControl>
    );
  }
}

Temperature.propTypes = {
  onClick: PropTypes.func,
};

export default Temperature;
