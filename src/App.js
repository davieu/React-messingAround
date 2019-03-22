import React, { Component } from 'react';
import './App.css';
import Validation from './components/ValidationComponent/ValidationComponent';
import Char from './components/CharComponent/CharComponent'

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
    userInput: '',
    showElements: true,
    lettersArray: []
  }

  inputChangedHandler = (event) => {
    let copyText = this.state.userInput.slice()
    copyText = event.target.value
    this.setState({userInput: copyText})
  }

  hideElements = () => {
    let doesShow = this.state.showElements;
    this.setState({showElements: !doesShow})
  }

  deleteCharHandler = ( index ) => {
    console.log(index)
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)}/>;
    })

    let showElements = null;
    let showButton = null;
    if (this.state.userInput) {
      showButton = (        
      <button 
        onClick={this.hideElements}>{this.state.showElements ? 'Hide' : 'Show'} Elements
      </button>)
    }

    //hides or shows the elements
    if (this.state.showElements) {
      showElements = 
    <div>
      {charList}
    </div>
    }

    return(
      <div className='App'>
        <h1>Type something and get the length</h1>

        {showButton}
        <input 
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
        {showElements}
      </div>
    )
  }
}

export default App;
