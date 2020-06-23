import React from 'react'

function NameList() {
  // const names = ['Facebook', 'Twiiter', 'Instagram', 'Netflix']
  const NameList = [
    {
      id: 1,
      name: 'Facebook'
    },
    {
      id: 2,
      name: 'Twitter'
    },
    {
      id: 3,
      name: 'Instagram'
    },
    {
      id: 4,
      name: 'Netflix'
    },

  ]

  return (
    <div>
     {/* {names.map(name => <h2>{name}</h2>)} */}
     {NameList.map(names => <h2>ID: {names.id} -- Name: {names.name}</h2>)}
    </div>
  )
}
export default NameList