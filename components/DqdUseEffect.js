import React, { useEffect, useState } from 'react'

export default function DqdUseEffect() {
    const [count, setCount] = useState(0);
    //ham xu li su kien
    const DqdhandleClick = ()=>{
        setCount(prev => prev +1);
    }
    // su dung ham useeffect de cap nhat lai
    useEffect(()=>{
        document.title = `Dang Quang Dung: You clicked ${count} times`
        console.log(`You clicked ${count} times`);
    });
    // useeffect: tham so thu 2 co mang rong
    useEffect(()=>{
        console.log( 'chay lan dau tien - Mot lan');
    },[])
    //[deps]
    useEffect(()=>{
        console.log('useEffect count click: ', count)
    },[count])
  return (
    <div>
      <h2> Demo - UseEffect: You clicked {count} times</h2>
      <button onClick={DqdhandleClick}>
        Click me
      </button>
    </div>
  )
}
