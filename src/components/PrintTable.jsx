import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";

class PrintTable extends React.Component {
  constructor(props) {
    super(props);
  }

  printData = () => {
    let temp = [...this.props.dbStudent]
    let index = 0
    return temp.map((value) => {
      if (value.filter) {
      if (!value.edit) {
        // if (value.filter) {
          index++;
          return <tr key={value.id}>
            <td>{index}</td>
            <td>{value.name}</td>
            <td>{value.class}</td>
            <td>{value.time}</td>
            <td>{value.job}</td>
            <td>{value.note}</td>
            <td>
              <div className="btn-group" role="group">
                <button type="button" class="btn btn-outline-warning" onClick={() => this.btnEdit(value.id)}>Edit</button>
                <button type="button" class="btn btn-danger" onClick={() => this.btnDelete(value.id)}>Delete</button>
              </div>
            </td>
          </tr>
        // }
      } else {
        return <tr key={value.id}>
          <td>{index + 1}</td>
          <td>
            <input type="text" className="form-control" defaultValue={value.name} ref="newName" />
          </td>
          <td>
            <select class="form-select" ref="newClass" defaultValue={value.class}>
              <option value="">Choose Class</option>
              <option>JC-Full Stack</option>
              <option>JC-Digital Marketing</option>
              <option>JC-UI/UX</option>
            </select>
          </td>
          <td>
            <select class="form-select" ref="newTime" defaultValue={value.time}>
              <option value="">Choose Time</option>
              <option>After Hour</option>
              <option>Full Time</option>
              <option>Livestream</option>
            </select>
          </td>
          <td>
            <input type="text" className="form-control" defaultValue={value.job} ref="newJob" />
          </td>
          <td>
            <input type="text" className="form-control" defaultValue={value.note} ref="newNote" />
          </td>
          <td>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-success" onClick={() => this.btnSave(value.id)}>Save</button>
              <button type="button" className="btn btn-outline-danger" onClick={() => this.btnCancel(value.id)}>Cancel</button>
            </div>
          </td>
        </tr>
      }
    }
    })
  }

  btnDelete = (idDelete) => {
    let temp = [...this.props.dbStudent]
    let idxDB = this.props.dbStudent.findIndex((val) => val.id == idDelete);
    temp.splice(idxDB, 1)
    this.props.handleUpdate(temp)
  }

  btnEdit = (idEdit) => {
    let temp = [...this.props.dbStudent]
    console.log(temp)
    let idxDB = temp.findIndex((val) => val.id == idEdit);
    temp[idxDB].edit = true
    console.log(temp)
    this.props.handleUpdate(temp)
  }

  btnSave = (idEdit) => {
    let temp = [...this.props.dbStudent]
    let idxDB = temp.findIndex((val) => val.id == idEdit);

    temp[idxDB].name = this.refs.newName.value 
    temp[idxDB].class = this.refs.newClass.value 
    temp[idxDB].time = this.refs.newTime.value 
    temp[idxDB].job = this.refs.newJob.value 
    temp[idxDB].note = this.refs.newNote.value 
    temp[idxDB].edit = false

    this.props.handleUpdate(temp)
  }

  btnCancel = (idEdit) => {
    let temp = [...this.props.dbStudent]
    let idxDB = temp.findIndex((val) => val.id == idEdit);
    temp[idxDB].edit = false
    console.log(temp)
    this.props.handleUpdate(temp)
  }

  btnSearch = () => {
    let temp = [...this.props.dbStudent]
    let filterName = this.refs.searchData[0].value.toLowerCase();
    let filterClass = this.refs.searchData[1].value;
    temp.forEach((val,index) => {
      const validName = (filterName == "" || val.name.toLowerCase().includes(filterName))
      const validClass = (filterClass == "" || (val.class == filterClass) )
      if (validName && validClass) {
        temp[index].filter = true
      } else {
        temp[index].filter = false
      }
    })
    this.props.handleUpdate(temp)
  }

  btnReset = () => {
    this.refs.searchData[0].value = null;
    this.refs.searchData[1].value = "";
    let temp = [...this.props.dbStudent]
    temp.forEach((val)=>{
      val.filter=true;
    })
    this.props.handleUpdate(temp)
  }

  render() {

    return (
      <div>
        <div className="container text-start">
          <h5>Search</h5>
          <form className="d-flex mx-2" ref="searchData">
            <span className="align-text-middle">
              Name
            </span>
            <input type="text" className="form-control"></input>
            <span>
              Class 
            </span>
            <select class="form-select">
                  <option value="">Choose Class</option>
                  <option>JC-Full Stack</option>
                  <option>JC-Digital Marketing</option>
                  <option>JC-UI/UX</option>
                </select>
            <button type="button" className="btn btn-primary" onClick={this.btnSearch}>Search</button>
            <button type="button" className="btn btn-primary" onClick={this.btnReset}>Reset</button>
          </form>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Class</th>
              <th>Time</th>
              <th>Job</th>
              <th>Note</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.printData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PrintTable;