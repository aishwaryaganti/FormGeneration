import React, { Component } from "react";
import Home from "./components/Home";
import Forms from "./components/Forms";
import Records from "./components/Records";
import Header from "./components/Header";
class App extends Component {
  state = {
    formList: ["Sample"],
    creatFormSectionState: "WorkSpace",
    currentFormState: [],
    currentPage: "Home",
    Sample: {
      Checkbox3: "Choose your opinion",
      Dropdown2: "Choose 1 slot",
      Text0: "Name",
      "Choose 1 slot": "1,2,3",
      "Choose your opinion": "yes,no",
      formDetails: ["Text", "Email", "Dropdown", "Checkbox"],
      name: "Sample",
    },
    RecordsList: [],
    currentRecord: "",
  };
  //------------------------------------------------ PAGE HANDLER --------------------------------------------
  onPageChange = (page) => {
    this.setState({ currentPage: page });
  };
  //------------------------------------ HANDLES FORM SELECTION FROM FORM LIST -------------------------------
  formHandler = (formName) => {
    console.log(formName);
    if (formName === "Create New Form") {
      this.setState({ creatFormSectionState: "Create New Form" });
    } else {
      this.setState({ creatFormSectionState: formName });
      //this.setState({currentFormState:this.state.})
    }
  };
  //------------------------------------------- DELETE RECORD -----------------------------------------------
  deleteRecordHandler = (recordName) => {
    this.setState(
      {
        RecordsList: this.state.RecordsList.filter(function (el) {
          return el.Record !== recordName;
        }),
      },
      () => {
        this.setState({ currentRecord: "" });
      }
    );
  };
  //----------------------------------------- RECORD HANDLER ------------------------------------------------
  recordClickHandler = (recordName) => {
    if (recordName === "Create New Form") {
      this.setState({ currentRecord: "" });
    } else {
      this.setState({ currentRecord: recordName });
      //this.setState({currentFormState:this.state.})
    }
  };
  //------------------------------------------ HANDLES NEW FORM CREATION -------------------------------------
  elementHandler = (input, name) => {
    console.log(input);
    if (this.state.currentFormState === []) {
      this.setState({ currentFormState: this.state[name][0].formDetails });
    }
    this.setState({
      currentFormState: this.state.currentFormState.concat([input]),
    });
    console.log(this.state);
  };
  //----------------------------------------------- REMOVE ELEMENTS ------------------------------------------

  elementRemoveHandler = (name) => {
    console.log(name);
    var temp = this.state.currentFormState;
    var i = this.state.currentFormState.indexOf(name);
    temp.splice(i, 1);
    this.setState({ currentFormState: temp }, () => {
      console.log("after delete", temp);
      console.log("after delete", this.state.currentFormState);
    });
  };
  //----------------------------------------------- SAVE FORMS ------------------------------------------

  formSaveHandler = (newForm) => {
    newForm.formDetails = this.state.currentFormState;
    console.log(newForm);
    newForm.RecordsList = [];
    var formName = newForm.name;
    this.setState({ [formName]: newForm }, () => {
      this.setState(
        { formList: this.state.formList.concat([newForm.name]) },
        () => {
          this.setState({ currentFormState: [] }, () => {
            this.setState({ creatFormSectionState: "WorkSpace" }, () => {
              console.log(this.state);
            });
          });
        }
      );
    });
  };
  //----------------------------------------------- DELETE FORMS ------------------------------------------

  formDeleteHandler = (name) => {
    var form = this.state;
    delete form[name];
    this.setState({
      state: form,
    });
    this.setState({ name: {} });
    this.setState({
      formList: this.state.formList.filter(function (el) {
        return el !== name;
      }),
    });
    this.setState({ creatFormSectionState: "WorkSpace" });
    console.log(this.state);
  };

  //----------------------------------------------- SAVE RECORD ----------------------------------------------
  onRecordSubmitHandler = (record) => {
    this.setState(
      { RecordsList: this.state.RecordsList.concat([record]) },
      () => {
        console.log(this.state);
      }
    );
  };

  //----------------------------------------------- RENDER ---------------------------------------------------
  render() {
    if (this.state.currentPage === "Home") {
      return (
        <div>
          <Header data="1" onPageClick={this.onPageChange} />
          <Home
            data={this.state}
            onItemClick={this.formHandler}
            onElementClick={this.elementHandler}
            onElementRemoval={this.elementRemoveHandler}
            onSave={this.formSaveHandler}
            onDelete={this.formDeleteHandler}
          />
        </div>
      );
    } else if (this.state.currentPage === "Forms") {
      return (
        <div>
          <Header data="2" onPageClick={this.onPageChange} />
          <Forms
            data={this.state}
            onFormClick={this.formClickHandler}
            onItemClick={this.formHandler}
            onSubmit={this.onRecordSubmitHandler}
          />
        </div>
      );
    } else if (this.state.currentPage === "Records") {
      return (
        <div>
          <Header data="3" onPageClick={this.onPageChange} />
          <Records
            data={this.state.RecordsList}
            recordName={this.state.currentRecord}
            onRecordClick={this.recordClickHandler}
            onRecordDelete={this.deleteRecordHandler}
          />
        </div>
      );
    }
  }
}
export default App;
