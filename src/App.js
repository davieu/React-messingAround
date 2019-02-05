import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
/*
1. create an input field (in App component) wih a change listener which outputs the length of the entered text below(e.g in a paragraph)
2. create a new component (=> validationComponent) which receives th text length as a prop
3. Inside the validationComponent either output "text too short" or "text long enough" depending on the text length (e.g. take 5 as a minimum length)
4. create another component (=> CharComponent) and stlye it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)
5. render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop
6. when you click a CharComponent. It should be removed from the entered text.
*/



class App extends Component {
  state = {
    profile: [
      { name: 'Davis', age: 26, status: ''}
    ],

    inputLength: 0
  }

  // Helper Function
  randomNameGenerator = () => {
    let randomNum = Math.floor(Math.random() * 6)

    let randomNames = ['Joe', 'Nick', 'James', 'Rambo', 'Jenny', 'Kate']

    return randomNames[randomNum]
  }
 
  buttonNameGenerator = (event) => {
    let currentProfile = this.state.profile[0];

    this.setState({
      profile: [
        { name: event, age: currentProfile.age, status: currentProfile.status }
      ]
    })
  }

  nameChangeHandler = (event) => {
    let currentProfile = this.state.profile[0];
    this.setState({
      profile: [
        { name: event.target.value, age: currentProfile.age, status: currentProfile.status }
      ]
    })
  }

  statusChangeHandler = (event) => {
    let currentProfile = this.state.profile[0];
    this.setState({
      profile: [
        { name: currentProfile.name, age: currentProfile.age, status: event.target.value }
      ]
    })
  }

  inputChangeHandler = (event) => {
    this.setState({
      inputLength: event.target.value
    })
  }



  render() {
    let currentProfile = this.state.profile[0];
    return (
      <div className="App">
        <h1>1st Assignment</h1>
        <button onClick={this.buttonNameGenerator.bind(this, this.randomNameGenerator())}>
          Random Name Generator
        </button>

        <UserOutput 
          staticUserID={25549}
          name={currentProfile.name}
          status={currentProfile.status} />
        <UserOutput 
          staticUserID={25549}
          name={currentProfile.name}
          status={currentProfile.status} />
        <UserInput 
          changedName={this.nameChangeHandler}
          changedStatus= {this.statusChangeHandler}
          name={currentProfile.name} />

          <input 
          type='text' 
          value={this.state.inputLength}
          onChange={this.inputChangeHandler}>
          </input>

          <ValidationComponent
          input={this.state.inputLength}
          inputLength={this.state.inputLength.length}
          />
      </div>
    );
  }
}

export default App;
