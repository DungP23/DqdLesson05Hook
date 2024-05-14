import React, { useState } from 'react'

export default function DqdUesState() {
      // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  //Mang
  const [list, setList] = useState([ 1, 5]);
   const DqdHandleList = () =>{
    let num = parseInt(Math.random()*100);
    //Cap nhan lai state: List
    setList([
        ...list,
        num
    ])
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr/>
      <h3> List: {list.toString()}</h3>
      <button onClick={DqdHandleList }> Them ngau nhien</button>
    </div>
  )
}
