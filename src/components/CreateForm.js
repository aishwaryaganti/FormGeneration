import React, { Component } from "react";
import "./Home.css";
class CreateForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    if (props.name === "Create New Form" || props.name === "Sample") {
      this.state = { name: "" };
    } else if (props.name === "WorkSpace") {
      this.state = { name: "" };
    } else {
      console.log("state assignment");
      console.log(props.data.state[this.props.name]);
      this.state = props.data.state[this.props.name];
    }
  }
  onFormSaveHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.name === "") {
      alert("Cant Save");
    }
    this.props.onSave(this.state);
  };
  removeElementHandler = (el) => {
    this.props.onElementRemoval(el);
  };
  deleteHandler = (name) => {
    this.props.onDelete(name);
  };
  render() {
    //----------------------------------------------- NEW FORM -----------------------------------------------
    if (this.props.name === "Sample") {
      return (
        <div className="ui ten wide center aligned column">
          <h2>This is a sample form.</h2>
          <p>
            You cant edit or view this here. Please choose another form or
            create a new form
          </p>
        </div>
      );
    } else if (this.props.name === "Create New Form") {
      //------------------------------------------------ START -----------------------------------------------

      const form = this.props.formDetails.map((el, id) => {
        if (el === "Text") {
          return (
            <div key={id}>
              <div className="ui input transparent">
                <input
                  type="text"
                  placeholder="Enter the Label Here"
                  value={this.state[el + id]}
                  onChange={(e) => this.setState({ [el + id]: e.target.value })}
                ></input>
              </div>
              <button
                className="negative circular ui icon button"
                onClick={() =>
                  this.removeElementHandler(el, this.state.name, id)
                }
              >
                <i className="close icon"></i>
              </button>
              <br></br>
              <br></br>
              <hr></hr>
            </div>
          );
        } else if (el === "Email") {
          return (
            <div key={id}>
              <div className="ui horizontal label">Email</div>
              <div className="ui input disabled">
                <input type="text" placeholder="Enter the nothing Here"></input>
              </div>
              <button
                className="negative circular ui icon button"
                onClick={() =>
                  this.removeElementHandler(el, this.state.name, "")
                }
              >
                <i className="close icon"></i>
              </button>
              <br></br>
              <br></br>
              <hr></hr>
            </div>
          );
        } else if (el === "Dropdown" || el === "Checkbox") {
          return (
            <div key={id}>
              <div className="ui input transparent">
                <input
                  type="text"
                  placeholder="Enter the Label Here"
                  onChange={(e) =>
                    this.setState({
                      [el + id]: e.target.value,
                    })
                  }
                ></input>
              </div>
              <br></br>
              <br></br>
              <div
                className="ui icon"
                data-tooltip="Enter Options (comma seperated)"
                data-inverted=""
              >
                <div className="ui input transparent">
                  <input
                    type="text"
                    placeholder="Enter options"
                    onChange={(e) =>
                      this.setState({ [this.state[el + id]]: e.target.value })
                    }
                  ></input>
                </div>
                <button
                  className="negative circular ui icon button"
                  onClick={() =>
                    this.removeElementHandler(el, this.state.name, id)
                  }
                >
                  <i className="close icon"></i>
                </button>
              </div>
              <br></br>
              <br></br>
              <hr></hr>
            </div>
          );
        }
      });

      //--------------------------------------------- END ----------------------------------------------------
      return (
        <div className="ui ten wide center aligned column">
          <h2>{this.props.name}</h2>
          <form className="ui form" onSubmit={this.onFormSaveHandler}>
            <div className="ui input transparent">
              <input
                type="text"
                placeholder="Enter Form Name"
                onChange={(e) => this.setState({ name: e.target.value })}
              ></input>
            </div>
            <br></br>
            <br></br>
            {form}
            <button className="ui green button">Save</button>
          </form>
          <br></br>
          <br></br>
          <button
            className="ui red button"
            onClick={() => this.deleteHandler(this.state.name)}
          >
            Delete
          </button>
        </div>
      );
    }

    //------------------------------------------- EXISTING FORM --------------------------------------------
    else {
      //---------------------------------------------- START -------------------------------------------------
      //const formData = this.props.data[this.props.name];
      console.log(this.props.name);
      const name = this.props.name;
      var form = "";
      if (this.props.data[name]) {
        form = this.props.data[name][0].formDetails.map((el, id) => {
          if (el.includes("Text")) {
            return (
              <div key={id}>
                <div className="ui input transparent">
                  <input
                    type="text"
                    value={this.state[el + id]}
                    onChange={(e) =>
                      this.setState({ [el + id]: e.target.value })
                    }
                  ></input>
                </div>
                {/* <button
                  className="negative circular ui icon button"
                  onClick={() => this.removeElementHandler(el, name, id)}
                >
                  <i className="close icon"></i>
                </button> */}
                <br></br>
                <br></br>
                <hr></hr>
              </div>
            );
          } else if (el.includes("Email")) {
            return (
              <div key={id}>
                <div className="ui horizontal label">Email</div>
                <div className="ui input disabled">
                  <input
                    type="text"
                    placeholder="Enter the nothing Here"
                  ></input>
                </div>
                {/* <button
                  className="negative circular ui icon button"
                  onClick={() => this.removeElementHandler(el, name, "")}
                >
                  <i className="close icon"></i>
                </button> */}
                <br></br>
                <br></br>
                <hr></hr>
              </div>
            );
          }
          return (
            <div key={id}>
              <div className="ui input transparent">
                <input
                  type="text"
                  placeholder="Enter the Label Here"
                  value={this.state[el + id]}
                  onChange={(e) =>
                    this.setState({
                      [el + id]: e.target.value,
                    })
                  }
                ></input>
              </div>
              <br></br>
              <br></br>
              <div
                className="ui icon"
                data-tooltip="Enter Options (comma seperated)"
                data-inverted=""
              >
                <div className="ui input transparent">
                  <input
                    type="text"
                    placeholder="Enter options"
                    value={this.state[el + id][1]}
                    onChange={(e) =>
                      this.setState({ [this.state[el + id]]: e.target.value })
                    }
                  ></input>
                </div>
                {/* <button
                  className="negative circular ui icon button"
                  onClick={() => this.removeElementHandler(el, name, id)}
                >
                  <i className="close icon"></i>
                </button> */}
              </div>
              <br></br>
              <br></br>
              <hr></hr>
            </div>
          );
        });
      }
      //--------------------------------------------------- END ----------------------------------------------
      return (
        <div className="ui ten wide center aligned column">
          <h2>{this.props.name}</h2>
          <form className="ui form">
            {form}
            {/* <button className="ui green button">Save</button> */}
          </form>
          <br></br>
          <br></br>
          <button
            className="ui red button"
            onClick={() => this.deleteHandler(this.props.name)}
          >
            Delete
          </button>
        </div>
      );
    }
  }
}
export default CreateForm;
