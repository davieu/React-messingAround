import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';


class App extends Component {
  state = {
    profile: [
      { name: 'Davis', age: 26, status: ''}
    ]
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



  render() {
    let currentProfile = this.state.profile[0];
    return (
      <div className="App">
        <h1>1st Assignment</h1>
        <button onClick={this.buttonNameGenerator.bind(this, this.randomNameGenerator())}>
          Random Name Generator
        </button>

        <UserOutput 
          name={currentProfile.name}
          status={currentProfile.status} />
        <UserOutput 
          name={currentProfile.name}
          status={currentProfile.status} />
        <UserInput 
          changedName={this.nameChangeHandler}
          changedStatus= {this.statusChangeHandler}
          name={currentProfile.name} />
      </div>
    );
  }
}

export default App;
