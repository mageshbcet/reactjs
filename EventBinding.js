import React, { Component } from 'react'

class EventBinding extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Hello'
    }
    // this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler = () => {
    this.setState ({
      message: 'Thank you'
    })
  }

  render() {
    return (
      <div>
      <h1>{this.state.message}</h1>
      {/* <button onClick={this.changeHandler.bind(this)}>Click</button> */}
      {/* <button onClick={() => this.changeHandler()}>Click</button> */}
      <button onClick={this.changeHandler}>Click</button>
      </div>
    )
  }
}

export default EventBinding