import React, { Component } from 'react'

class User extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    let message
    if (this.state.isLoggedIn) {
      message = <div>Welcome Magesh</div>
    }
    else {
      message = <div>Welcome Guest</div>
    }
  return <div>{message}</div>
  }
}

export default User