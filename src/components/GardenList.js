import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

export class GardenList extends Component {

  componentDidMount = () => {
    this.props.gardenFetchAll()
  }
  
  renderGardenList = () => this.props.gardens.map(garden => {
    return (
      <div key={garden._id}>
        <div>Name: {garden.name}</div>
        <div>Dimensions: {garden.gardenX} x {garden.gardenY}</div>
        <div>Location: {garden.location}</div>
        <button onClick={()=>this.props.activateGarden({gardenId: garden._id})}>Activate Garden</button>
        <br /><br />
      </div>
    )
  })

  render() {
    return (
      <div>
        {this.renderGardenList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  gardens: state.garden.gardens,
  authenticated: state.auth.authenticated
})

export default connect(mapStateToProps, actions)(GardenList)
