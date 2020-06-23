import React, { Component } from 'react'

class LifecycleMounting extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: 'Hi'
    }
    console.log('Lifecycle constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle getDerivedStateFromProbs')
    return null;
  }
  
  componentDidMount() {
    console.log('Lifecycle componentDidMount')
  }
  
  render() {
    console.log('Lifecycle render');
    return (
        <h1>Hello</h1>
    ) 
  }
}
export default LifecycleMounting