import React, { Component } from "react";

class ViewRecords extends Component {
  deleteRecordHandler = (recordname) => {
    this.props.onRecordDelete(recordname);
  };
  render() {
    if (this.props.name == "") {
      return (
        <div className="ui six wide center aligned column">
          <h2>No record Choosen</h2>
          <p>Choose a record to view the record entry</p>
        </div>
      );
    } else {
      var item = 0;
      for (let i = 0; i < this.props.data.length; i++) {
        if (this.props.data[i].Record === this.props.name) {
          item = i;
        }
      }
      var fields = Object.keys(this.props.data[item]).map((key, id) => {
        console.log(key);
        if (key === "Record" || key === "FormName") {
          return;
        } else {
          return (
            <div className="event" key={id}>
              <div className="content">
                <div className="summary">
                  <b>{key}</b>:{this.props.data[item][key]}
                </div>
              </div>
            </div>
          );
        }
      });
      return (
        <div className="ui card">
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="content">
            <h4 className="ui sub header">
              Form: {this.props.data[item].FormName}
            </h4>
            <div className="ui small feed">{fields}</div>
          </div>
          <div class="extra content">
            <button
              class="ui  red button"
              onClick={(e) => this.deleteRecordHandler(this.props.name)}
            >
              Delete Record
            </button>
          </div>
        </div>
      );
    }
  }
}
export default ViewRecords;
