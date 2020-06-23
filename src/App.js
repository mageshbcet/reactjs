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
import Fragments from './Components/Fragments';
import Table from './Components/Table'
import NameList from './Components/NameList'
import Stylesheet from './Components/Stylesheet'
import Inline from './Components/Inline';
import styles from './appStyles.module.css'
import LifecyleMounting from './Components/LifecycleMounting';
import HttpGet from './Components/HttpGet'
import PostForm from './Components/PostForm';


class App extends Component {
  render () {
    return (
      <div className="App">
        {/* <HttpGet /> */}
        {/* <PostForm /> */}
        {/* <LifecyleMounting /> */}
        {/* <h2 className={styles.heading}>Welcome</h2> */}
        {/* <Stylesheet name={true} /> */}
        {/* <Inline /> */}
        {/* <EventBinding />
        <Form />
        <Conditional /> */}
        {/* <User /> */}
        {/* <FunctionalClick /> */}
        {/* <Message /> */}
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
        <Fragments />
        {/* <Table /> */}
        {/* <NameList /> */}
        {/* <Stylesheet /> */}
      </div>
    );
  }
}

export default App;
