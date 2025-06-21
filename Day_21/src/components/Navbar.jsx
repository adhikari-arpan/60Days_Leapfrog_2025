import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
const count = useSelector((state) => state.counter.value);

  return (
    <div>
      Counter Project
      <br/>
      The value of count is {count}
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Navbar