import React from "react";
import PrintTable from "./PrintTable";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonSubmit = () => {
    let temp=[...this.props.dbStudent]
    
    let inputStudent = new Object();
    inputStudent.id = this.props.dbStudent.length + 1;
    inputStudent.name = this.refs.inputStudent[0].value;
    inputStudent.class = this.refs.inputStudent[1].value;
    inputStudent.time = this.refs.inputStudent[2].value;
    inputStudent.job = this.refs.inputStudent[3].value;
    inputStudent.note = this.refs.inputStudent[4].value;
    inputStudent.edit = false
    inputStudent.filter = true
    temp.push(inputStudent)
    this.props.handleUpdate(temp);
    this.handleReset();
  }

  handleReset = () => {
    this.refs.inputStudent[0].value = null;
    this.refs.inputStudent[1].value = "";
    this.refs.inputStudent[2].value = "";
    this.refs.inputStudent[3].value = null;
    this.refs.inputStudent[4].value = null;
  }

  render() {

    return (
      <div>
        <div className="container">
          <h2 className="fs-3 px-4 text-start">Data Form Input</h2>
          <form className="px-4" ref="inputStudent">
            <div className="my-3">
              <p className="form-label text-start">Name</p>
              <input type="text" className="form-control" />
            </div>
            <div className="my-3">
              <p className="form-label text-start">Class</p>
              <select class="form-select">
                <option value="">Choose Class</option>
                <option>JC-Full Stack</option>
                <option>JC-Digital Marketing</option>
                <option>JC-UI/UX</option>
              </select>
            </div>
            <div className="my-3">
              <p className="form-label text-start">Time</p>
              <select class="form-select">
                <option value="">Choose Time</option>
                <option>After Hour</option>
                <option>Full Time</option>
                <option>Livestream</option>
              </select>
            </div>
            <div className="my-3">
              <p className="form-label text-start">Job</p>
              <input type="text" className="form-control" />
            </div>
            <div className="my-3">
              <p className="form-label text-start">Note</p>
              <input type="text" className="form-control" />
            </div>
          </form>
          <div class="container px-4 d-grid">
            <button type="button" className="btn btn-primary" onClick={this.buttonSubmit}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default InputForm