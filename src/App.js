import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';

// import UserOutput from './components/UserOutput/UserOutput';
// import UserInput from './components/UserInput/UserInput';
// import ValidationComponent from './components/ValidationComponent/ValidationComponent';
// import CharComponent from './components/CharComponent/CharComponent'
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
    text: 'ss',
    lengthOfText: null
  }

  getText = (event) => {
    let copyText = this.state.text.slice()
    copyText = event.target.value
    this.setState({text: copyText})
  }

  checkLength = () => {
    let textLength = this.state.text.length
    return (textLength > 5) ? "Text long enough!" : "Text too short!"
  }

  render() {
    return(
      <div className='App'>
        <h1>Type something and get the length</h1>
        <input type="text" onChange={this.getText} value={this.state.text}>
        </input>
        <p>{this.state.text}</p>
        <p>Length of Text: {this.state.text.length}</p>
        <ValidationComponent length={this.state.text.length} validator={this.checkLength()}/>
      </div>
    )
  }
}

export default App;
