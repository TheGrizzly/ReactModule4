import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: "",
    size: 0,
    chars: []
  }

  textChangedHandler = (event) =>{
    const text = event.target.value;
    const size = text.length;
    const chars = text.split('');
    let charObject = [];
    let i;
    for(i=0;i<size; i++){
      charObject.push({character: chars[i], id: i+1});
    }
    this.setState({
      text: text,
      size: size,
      chars: charObject
    })
  }

  deleteCharHandler = (charIndex) => {
    let text = this.state.text;
    const chars = [...this.state.chars];

    let arrayText = text.split('');
    arrayText.splice(charIndex, 1);
    text = arrayText.join('');
    chars.splice(charIndex, 1);
    const size = text.length;
    this.setState({
      text: text,
      size: size,
      chars: chars
    });
  }
  
  render() {
    let chars = null;

    if(this.state.size > 0){
      chars = (
        <div>
          {this.state.chars.map((char, index) => {
            return <CharComponent 
              key={char.id}
              click={() => this.deleteCharHandler(index)} 
              char={char.character}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <input type="text" onChange={this.textChangedHandler} value={this.state.text}/>
        <p>{this.state.size}</p>
        <ValidationComponent size={this.state.size} />
        {chars}
      </div>
    );
  }
}

export default App;
