import React, { useContext } from 'react'
import { ThemeContext } from './DqdUseContext'

export default function DqdUseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme + 'm-3'}>
      <h2>DqdUseContext2</h2>
      <p>
        <b> Anh Yeu Phuong </b>
        <b> Phuong cute</b>
        <i> My love </i>
      </p>
    </div>
  )
}
