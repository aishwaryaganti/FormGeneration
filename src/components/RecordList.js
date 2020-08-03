import React, { Component } from "react";

class RecordList extends Component {
  recordItemHandler = (e) => {
    e.preventDefault();
    this.props.onRecordClick(e.target.innerText);
  };
  render() {
    const list = this.props.data.map((el, id) => {
      console.log(el.Record);
      return (
        <div className="item" key={id}>
          <div className="content">
            <div className="header" onClick={this.recordItemHandler}>
              {el.Record}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="ui five wide center aligned column">
        <h2>Record List</h2>
        <div className="ui middle aligned selection list">{list}</div>
      </div>
    );
  }
}

export default RecordList;
