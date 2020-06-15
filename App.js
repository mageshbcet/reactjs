import React, { Component } from 'react';
import './App.css';
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import FunctionalClick from './Components/FunctionalClick'
import User from './Components/User'
import Functional from './Components/Functional'
import EventBinding from './Components/EventBinding';
import Conditional from './Components/Conditional';
import Form from './Components/Form'

class App extends Component {
  render () {
    return (
      <div className="App">
        <EventBinding />
        <Form />
        <Conditional />
        {/* <User /> */}
        {/* <FunctionalClick /> */}
        <Message />
        {/* <Welcome />*/}
        {/* <Functional /> */}
        {/* <Hello name = "Facebook">
          <p>This is child element</p>
        </Hello>
        <Hello name = "Twitter">
          <p>This is second child element</p>
        </Hello>
        <Hello name = "Instagram">
          <p>This is third element</p>
        </Hello> */}
      </div>
    );
  }
}

export default App;
