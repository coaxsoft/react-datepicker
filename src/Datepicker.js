import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

import handleClickOutside from "./clickOutsideHOC";


class Datepicker extends React.Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired,
  };

  handleClickOutside() {
    this.props.onClickOutside();
  }

  render() {
    return (
      <div className="rdos-datepicker-wrapper"/>
    )
  }
}

export default handleClickOutside(Datepicker);
