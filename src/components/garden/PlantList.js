import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PlantList extends Component {
  renderPlants() {
    if(this.props.plants) {
      return this.props.plants.map((plant, i) => {
        return (
          <div key={i}>
            <div>type: {plant.plantType} {i}</div>
            <div>x: {plant.plantX} y: {plant.plantY}</div>
          </div>
        )
      })
    }
  }
  render() {
    return (
      <div>
        Plant list:
        {this.renderPlants()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  plants: state.garden.activeGarden.plants
})

export default connect(mapStateToProps)(PlantList)
