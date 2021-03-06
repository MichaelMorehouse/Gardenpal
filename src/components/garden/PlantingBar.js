import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

export class PlantingBar extends Component {

  renderPlantChanges() {
    return this.props.plantChanges.map((plant, i) => {
      return (
        <div key={i}>
        {plant.plantType}
        <div>
          x: {plant.plantX} y: {plant.plantY}
        </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <button>New Plant</button>
        <button onClick={()=>this.props.confirmPlantChanges(this.props.plantChanges)}>Confirm Changes</button>
        <button onClick={()=>this.props.clearPlantChanges()}>Clear Changes</button>
        {this.renderPlantChanges()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  plants: state.garden.activeGarden.plants,
  plantChanges: state.garden.plantChanges
})

export default connect(mapStateToProps, actions)(PlantingBar)
