import React, { Component } from "react";
import Label from "reactstrap";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);
  }

  state = { number: "", number2: "" };

  calculate(event) {
    event.preventDefault();
    //console.log("calculate");
    let { number, number2 } = this.state;
    if (isNaN(number)) {
      //console.log("not a number");
      alert("That's not a number");
      return false;
    }
    if (isNaN(number2)) {
      //console.log("not a number");
      alert("That's not a number");
      return false;
    }
    let sum = parseFloat(number) + parseFloat(number2);
    alert(`The sum of ${number} + ${number2} = ${sum}`);
    return false;
  }

  render() {
    return (
      <form onSubmit={this.calculate} style={{ paddingTop: 20 }}>
        <label>
          number:
          <input
            type="text"
            value={this.state.number}
            onChange={(e => {
              this.setState({ number: e.target.value });
            }).bind(this)}
          />
        </label>
        <label>
          number2:
          <input
            type="text"
            value={this.state.number2}
            onChange={(e => {
              this.setState({ number2: e.target.value });
            }).bind(this)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
