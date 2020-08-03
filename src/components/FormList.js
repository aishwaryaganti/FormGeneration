import React, { Component } from "react";
import "./Home.css";
class FormList extends Component {
  formItemHandler = (e) => {
    e.preventDefault();
    this.props.onItemClick(e.target.innerText);
  };
  render() {
    const list = this.props.data.map((el, id) => {
      return (
        <div className="item" key={id}>
          <div className="content">
            <div className="header" onClick={this.formItemHandler}>
              {el}
            </div>
          </div>
        </div>
      );
    });
    if (this.props.page === "forms") {
      return (
        <div className="ui three wide center aligned column">
          <h2>Forms List</h2>
          <div className="ui middle aligned selection list">{list}</div>
        </div>
      );
    } else {
      return (
        <div className="ui three wide center aligned column">
          <h2>Forms List</h2>
          <div className="ui middle aligned selection list">{list}</div>
          <button
            className="medium ui blue button"
            onClick={this.formItemHandler}
          >
            Create New Form
          </button>
        </div>
      );
    }
  }
}
export default FormList;
