import React from 'react'
import NavBar from './NavBar'

export default ({ children }) => {
  return (
    <div className="App">
        <NavBar />
        <div className="AppChild">
          {children}
        </div>
    </div>
  )
}
