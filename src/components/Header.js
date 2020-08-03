import React, { Component } from "react";
import "./Home.css";
class Header extends Component {
  formsPageHandler = (e) => {
    e.preventDefault();
    this.props.onPageClick(e.target.innerText);
  };
  render() {
    if (this.props.data === "1") {
      return (
        <div>
          <div className="ui inverted segment">
            <div className="ui inverted top attached tabular massive menu">
              <div className="item active" onClick={this.formsPageHandler}>
                Home
              </div>
              <div className="item" onClick={this.formsPageHandler}>
                Forms
              </div>
              <div className="item" onClick={this.formsPageHandler}>
                Records
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.data === "2") {
      return (
        <div>
          <div className="ui inverted segment">
            <div className="ui inverted top attached tabular massive menu">
              <div className="item " onClick={this.formsPageHandler}>
                Home
              </div>
              <div className="item active" onClick={this.formsPageHandler}>
                Forms
              </div>
              <div className="item" onClick={this.formsPageHandler}>
                Records
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.data === "3") {
      return (
        <div>
          <div className="ui inverted segment">
            <div className="ui inverted top attached tabular massive menu">
              <div className="item " onClick={this.formsPageHandler}>
                Home
              </div>
              <div className="item" onClick={this.formsPageHandler}>
                Forms
              </div>
              <div className="item active" onClick={this.formsPageHandler}>
                Records
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Header;
