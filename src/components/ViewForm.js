import React, { Component } from "react";

export default class ViewForm extends Component {
  state = {};
  recordSubmitHandler = (e) => {
    e.preventDefault();
    const recordName = "Record" + new Date().getTime();
    this.setState({ Record: recordName }, () => {
      this.setState({ FormName: this.props.name }, () => {
        console.log("submit handler", this.state);
        this.props.onSubmit(this.state);
      });
    });
  };
  render() {
    if (this.props.name !== "WorkSpace") {
      const formDetails = this.props.data;
      const form = this.props.data.formDetails.map((el, id) => {
        if (el.includes("Text")) {
          //console.log(this.props.data[el + id]);
          return (
            <div className="inline field">
              <label>{this.props.data[el + id]}</label>
              <input
                type="text"
                placeholder="Enter Value"
                onChange={(e) =>
                  this.setState({ [this.props.data[el + id]]: e.target.value })
                }
              ></input>
            </div>
          );
        } else if (el.includes("Email")) {
          return (
            <div className="inline field">
              <label>{el}</label>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => this.setState({ Email: e.target.value })}
              ></input>
            </div>
          );
        } else if (el.includes("Dropdown")) {
          const optionValues = this.props.data[this.props.data[el + id]].split(
            ","
          );
          //console.log(optionValues);
          const options = optionValues.map((el, id) => {
            //console.log(el);
            return (
              <option value={el} key={id}>
                {el}
              </option>
            );
          });
          return (
            <div className="inline field">
              <label>{this.props.data[el + id]}</label>
              <select
                class="ui search dropdown"
                onChange={(e) =>
                  this.setState({ [this.props.data[el + id]]: e.target.value })
                }
              >
                {options}
              </select>
            </div>
          );
        } else if (el.includes("Checkbox")) {
          const optionValues = this.props.data[this.props.data[el + id]].split(
            ","
          );
          const label = this.props.data[el + id];
          //console.log(optionValues);
          const options = optionValues.map((el, id) => {
            //console.log(el);
            return (
              <div class="field">
                <div class="ui radio checkbox" key={id}>
                  <input
                    type="radio"
                    name={el}
                    onChange={(e) =>
                      this.setState({
                        [label]: el,
                      })
                    }
                  ></input>
                  <label>{el}</label>
                </div>
              </div>
            );
          });
          return (
            <div class="grouped fields">
              <label>{this.props.data[el + id]}</label>
              {options}
            </div>
          );
        }
      });
      //console.log(formDetails);
      return (
        <div className="ui ten wide center aligned column">
          <h2>{this.props.name}</h2>
          <form className="ui form" onSubmit={this.recordSubmitHandler}>
            {form}
            <button className="grey ui icon button">Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="ui ten wide center aligned column">
          <h2>Choose the Form from the List </h2>
        </div>
      );
    }
  }
}
