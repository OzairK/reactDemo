import React, { Component } from 'react';
import './App.css';
import LenghtChecker from './LengthChecker/LengthChecker';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: '',
    length : 0,
    textArr: [],
  }

  inputChangeHandler = (event) => {
    this.setState(
      {
        text : event.target.value,
        length: event.target.value.length,
        textArr: event.target.value.split('')
      }
    )
  }

  deleteChars = (index) => {
    const foo = [...this.state.textArr]
    foo.splice(index, 1);
    const delFooStrig = foo.join('')
    this.setState({
      textArr: foo,
      length: foo.length,
      text: delFooStrig
    })
  }


  render() {
    const charsComps = (<div>
      {this.state.textArr.map((val, index) => {
        return <CharComponent char={val} click={this.deleteChars.bind(this, index)}/>
      })}
    </div>)
    
    return (
    <div className="App">
      <input onChange={this.inputChangeHandler} value={this.state.text}></input>
      <p>{this.state.text}</p>
      <LenghtChecker length={this.state.length}/>
      {charsComps}
    </div>
  );
  }
}

export default App;
