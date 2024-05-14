import React from 'react'
import DqdUesState from './components/DqdUesState'
import DqdUseEffect from './components/DqdUseEffect'
import DqdUseContext from './components/DqdUseContext'
import './App.css'

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'> Dang Quang Dung - Hook</h1>
      <hr/>
      < DqdUesState />
      <hr/>
      <DqdUseEffect/>
      <hr/>
      <DqdUseContext/>
    </div>
  )
}
