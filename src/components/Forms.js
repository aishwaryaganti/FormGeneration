import React, { Component } from "react";
import FormList from "./FormList";
import ViewForm from "./ViewForm";
export default class Forms extends Component {
  render() {
    return (
      <div>
        <div className="home ui segment" style={{ height: "100%" }}>
          <div className="ui two column very relaxed grid">
            <FormList
              data={this.props.data.formList}
              page="forms"
              onItemClick={this.props.onItemClick}
            />
            <ViewForm
              data={this.props.data[this.props.data.creatFormSectionState]}
              name={this.props.data.creatFormSectionState}
              onSubmit={this.props.onSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}
