import React  from 'react'

class Conditional extends React.Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    let message
    if (this.state.isLoggedIn == false) {
      message = <div>Welcome Guest</div>      
    }
    else {
      message = <div>Welcome Magesh</div>      
    }
    return <div>{message}</div>
  }
}

export default Conditional