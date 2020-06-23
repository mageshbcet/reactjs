import React from 'react'

function clickHandler() {
  console.log("Hello");
}

function FunctionalClick() {
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
export default FunctionalClick