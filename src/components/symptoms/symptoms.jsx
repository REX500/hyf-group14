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
			firstPage: true,
			isFirstPageValid: false,
		};

		this.onRadioChange = this.onRadioChange.bind(this);
		this.handleFirstPageClick = this.handleFirstPageClick.bind(this);
		this._handleClick = this._handleClick.bind(this);
	}

	onRadioChange = (e) => {
		const { target } = e;
		const value = target.value;

		this.setState({
			value,
			isFirstPageValid: value === "Ja",
		});
	};

	handleFirstPageClick = () => {
    this.setState((prevState) => ({ firstPage: !prevState.isFirstPageValid }));
    
	};

	_handleClick() {
		const { firstPage } = this.state;
    const { onClick } = this.props;

		if(firstPage) this.handleFirstPageClick();
		else {
			this.state.value ==='Ja' && onClick();
		}
	}

	render() {
		return (
			<FormControl component="fieldset" name="firstPage">
				<div className="wraper">
					<h2>{this.state.firstPage ? "Har du Hoste?" : "Har du Feber?"}</h2>

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
							{this.state.isFirstPageValid
								? "Gå til næste"
								: "Ikke at bekymre sig"}
						</Button>
					</footer>
				</div>
			</FormControl>
		);
	}
}

Symptoms.propTypes = {
	onClick: PropTypes.func,
};

export default Symptoms;
