import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm';
import PrintTable from './components/PrintTable';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbStudent: [
        {
          id: '1',
          name: 'Abdi',
          class: 'JC-Full Stack',
          time: 'After Hour',
          job: 'Product Manager',
          note: 'test',
          edit: false,
          filter: true,
        }
      ]
    }
  }

  handleUpdate = (childData) => {
    this.setState({
      dbStudent: childData,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container d-flex py-4">
          <div className="col-4">
            <InputForm dbStudent={this.state.dbStudent} handleUpdate={this.handleUpdate} />
          </div>
          <div className="col-8">
            <PrintTable dbStudent={this.state.dbStudent} handleUpdate={this.handleUpdate}/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
