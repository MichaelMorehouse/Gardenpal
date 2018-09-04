import React from 'react'
import AuthBar from './AuthBar'
import NavBar from './NavBar'

export default ({ children }) => {
  return (
    <div>
        <AuthBar />
        <NavBar />
        {children}
    </div>
  )
}
