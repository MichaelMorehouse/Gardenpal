import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

export class PlantingBar extends Component {

  renderPlantChanges() {
    return this.props.plantChanges.map((plant, i) => {
      return (
        <div key={i}>{plant.plantType}</div>
      )
    })
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.props.plantNew({change: 'new', plantType: 'pepper'})}>New Plant</button>
        <button onClick={()=>this.props.confirmPlantChanges(this.props.plantChanges)}>Confirm Plants</button>
        {this.renderPlantChanges()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  plantChanges: state.garden.plantChanges
})

export default connect(mapStateToProps, actions)(PlantingBar)
