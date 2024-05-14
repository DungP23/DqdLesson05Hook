import React, { createContext, useContext, useState } from 'react'
import DqdUseContext1 from './DqdUseContext1';
export const ThemeContext = createContext (); //tao ngu canh de chia se
export default function DqdUseComtext() {
    // state
    const [theme,setTheme] = useState('pink');

    //ham thay doi theme
    const dqdHandleChange = ()=>{
      setTheme (theme==='pink'? 'blue':'pink');

    }
  return (
    <ThemeContext.Provider value={theme}>
        <div className='alert'>
      <h2> Demo UseContext</h2>
      <DqdUseContext1/>
      <button onClick={dqdHandleChange}> Change bgColor</button>
    </div>
    </ThemeContext.Provider>
    
  )
}
