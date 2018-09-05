import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions'

export class GardenList extends Component {
  static propTypes = {
  }

  componentDidMount = () => {
    this.props.gardenFetchAll()
  }
  
  renderGardenList = () => this.props.gardens.map(garden => {
    return (
      <div>
        <div>Name: {garden.name}</div>
        <div>Dimensions: {garden.gardenX} x {garden.gardenY}</div>
        <div>Location: {garden.location}</div>
        <button onClick={this.props.activateGarden}>Activate Garden</button>
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
  gardens: state.garden.gardens
})

export default connect(mapStateToProps, actions)(GardenList)
