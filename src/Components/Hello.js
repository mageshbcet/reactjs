import React from 'react'

function Hello(props) {
  function changeHandler() {
    alert("hello");
  }

  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
      <button onClick={changeHandler}>Click</button>
    </div>
  )
}

export default Hello