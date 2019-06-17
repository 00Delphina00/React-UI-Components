import React from "react";
var FontAwesome = require("react-fontawesome");

export class TimeStamp extends React.Component {
  constructor() {
    super();

    var today = new Date(),
      date = today.getDate() + "-" + (today.getMonth() + 1);

    this.state = {
      date: date
    };
  }

  render() {
    return (
      <div className="date">
        <FontAwesome name="calendar" />
        {this.state.date}
      </div>
    );
  }
}
