import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PlantList extends Component {
  renderPlants() {
    if(this.props.garden.plants) {
      return this.props.garden.plants.map((plant, i) => {
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
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantList)
