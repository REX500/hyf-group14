import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// styles
import "./style.css";

// image
import Logo from "./corona-logo.png";

export default function Header({ home }) {
  return (
    <header className={cx("header", { "header-home": home })}>
      <img src={Logo} alt="logo" className="logo" />
      <span className={cx("header-text", { "header-text-home": home })}>hjælpDeÆldre</span>
    </header>
  );
}

Header.defaultProps = {
  home: false,
};

Header.propTypes = {
  home: PropTypes.bool,
};
