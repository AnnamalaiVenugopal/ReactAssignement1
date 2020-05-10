import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component{
  state = {
    person:[
      {"name":"Annamalai"},
      {"name": "Vignesh"},
      {"name": "Tamil"}
    ]
  };

  switchUserNameHandler= event =>{
    this.setState(
     { person:[
        {"name": event.target.value},
        {"name": "Vignesh"},
        {"name": "Tamil"}
      ]
    }
    );
  }

  switchClickHandler= name =>{
    this.setState(
      { person:[
         {"name": name},
         {"name": "Vignesh"},
         {"name": "Tamil"}
       ]
     }
     );
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
  return (
    <div className="App">
      <UserInput change={this.switchUserNameHandler}></UserInput>
      <UserOutput name=  {this.state.person[0].name} style={style} click={this.switchClickHandler.bind(this,"Malai")}></UserOutput>
      <UserOutput name = {this.state.person[1].name} style={style}></UserOutput>
      <UserOutput name = {this.state.person[2].name} style={style}></UserOutput>
    </div>
  );
}
}
export default App;
