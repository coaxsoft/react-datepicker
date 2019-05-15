import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Datepicker from "./Datepicker";


class Main extends React.Component {
  constructor(props) {
    super(props);

    this._triggerDatepicker = this._triggerDatepicker.bind(this);
    this.removeDatepicker = this.removeDatepicker.bind(this);
  }

  _triggerDatepicker() {
    this.popup = document.createElement("div");
    this.popup.setAttribute("id", "rdospopupTarget");

    document.body.appendChild(this.popup);

    ReactDOM.render(<Datepicker onClickOutside={this.removeDatepicker}/>, this.popup);
  }

  removeDatepicker() {
    ReactDOM.unmountComponentAtNode(this.popup);
    document.body.removeChild(this.popup);
  }


  render() {
    return (
      <div className="rdos-wrapper" onClick={this._triggerDatepicker}>
        <input/>
      </div>
    )
  }
}

export default Main;
