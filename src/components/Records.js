import React, { Component } from "react";
import RecordList from "./RecordList";
import ViewRecord from "./ViewRecords";
export default class Records extends Component {
  render() {
    return (
      <div>
        <div className="home ui segment" style={{ height: "100%" }}>
          <div className="ui two column very relaxed grid">
            <RecordList
              data={this.props.data}
              onRecordClick={this.props.onRecordClick}
            />
            <ViewRecord
              name={this.props.recordName}
              data={this.props.data}
              onRecordDelete={this.props.onRecordDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}
