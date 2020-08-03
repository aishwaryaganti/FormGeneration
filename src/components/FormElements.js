import React, { Component } from "react";
import "./Home.css";
class FormElements extends Component {
  addElementHandler = (e) => {
    this.props.onElementClick(e.target.innerText, this.props.name);
  };
  render() {
    return (
      <div className="ui three wide center aligned column">
        <h2>Elements</h2>
        <p> Click on the field that you want to add to your form.</p>
        <div className="ui vertical buttons">
          <button className="medium ui button" onClick={this.addElementHandler}>
            Text
          </button>
          <button className="medium ui button" onClick={this.addElementHandler}>
            Email
          </button>
          <button className="medium ui button" onClick={this.addElementHandler}>
            Dropdown
          </button>
          <button className="medium ui button" onClick={this.addElementHandler}>
            Checkbox
          </button>
        </div>
      </div>
    );
  }
}
export default FormElements;
