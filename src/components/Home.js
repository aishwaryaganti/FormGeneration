import React, { Component } from "react";
import FormList from "./FormList";
import CreateForm from "./CreateForm";
import FormElements from "./FormElements";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="home ui segment" style={{ height: "100%" }}>
          <div className="ui three column very relaxed grid">
            <FormList
              data={this.props.data.formList}
              onItemClick={this.props.onItemClick}
            />
            <CreateForm
              data={this.props.data}
              name={this.props.data.creatFormSectionState}
              formDetails={this.props.data.currentFormState}
              onElementRemoval={this.props.onElementRemoval}
              onSave={this.props.onSave}
              onDelete={this.props.onDelete}
            />
            <FormElements
              formName={this.props.data.creatFormSectionState}
              onElementClick={this.props.onElementClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
