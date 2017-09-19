// Code Keypad Component Here
import React from 'react';


export default class Keypad extends React.Component{
  handleInputPassword = () => console.log('Entering password...')
  render(){
    return (
      <div>
      <input type="password" onKeyUp={this.handleInputPassword}/>
      </div>
    );
  }

}





// Mr. Burns has requested us to build a new keypad component for the nuclear plant, since the last one was way too complicated for his employees to use. We'll keep things super simple instead, and use an <input type="password" /> field to capture input. Here's how to complete the exercise:
// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.
