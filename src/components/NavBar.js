import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

export class NavBar extends Component {
  renderNavpaths() {
    if(this.props.authenticated) {
      return (
        <div>
          <li><NavLink to="/garden">Your Garden</NavLink></li>
          <li><NavLink to="/creategarden">Create a new Garden</NavLink></li>
          <li><NavLink to="/gardenlist">All Gardens</NavLink></li>
        </div>
      )
    }
  }
  
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          {this.renderNavpaths()}
        </ul>      
      </div>
    )
  }
}

const mapStateToProps = state => ({ authenticated: state.auth.authenticated })

export default connect(mapStateToProps)(NavBar)