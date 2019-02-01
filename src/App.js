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
    let randomNames = ['Joe', 'Nick', 'James', 'Rambo', 'Jenny', 'Kate']
    let namesArraySize = randomNames.length
    
    let counter = 1
    let reducingArray = [0, 1, 2, 3, 4, 5]
    let randomNum = Math.floor(Math.random() * namesArraySize)
    console.log('randomNum1', randomNum)
    let temp = [];


    if (counter === 1) {
      temp[0] = randomNum
      counter = 2
    }

    if (counter === 2) {
      let result = reducingArray.filter(num => num !== temp[0]);
      console.log(result)
      let poop = result[Math.floor(Math.random() * 4)]

      console.log('random', result[Math.floor(Math.random() * 4)])
      console.log(poop)
      console.log('aaaa', result[poop])
      console.log(randomNames[result[poop]])


    }

    console.log('randomNum2', randomNum)

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
