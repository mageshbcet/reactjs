import React, { Component } from 'react'

class Form extends Component {

  constructor() {
    super()
    this.state = {
      username: 'Hello'
    }
  }
  changeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  submitHandler = (event) => {
    alert(`${this.state.username}`)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={this.changeHandler}></input>
          <button type="submit">Submit</button>
        </div>

      </form>
    )
  }
}
export default Form