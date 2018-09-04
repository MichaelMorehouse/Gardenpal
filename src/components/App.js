import React from 'react'
import AuthBar from './AuthBar'
import NavBar from './NavBar'

export default ({ children }) => {
  return (
    <div className="App">
        <AuthBar />
        <NavBar />
        <div className="content">
          {children}
        </div>
    </div>
  )
}
