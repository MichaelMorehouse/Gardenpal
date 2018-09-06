import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PlantList extends Component {
  renderPlants() {
    if(this.props.plants) {
      return this.props.plants.map((plant, i) => {
        return (
          <div key={plant._id}>
            {plant.plantType} {i+1}
          </div>
        )
      })
    }
  }
  render() {
    return (
      <div>
        IM THE PLANT LIST
        {this.renderPlants()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  plants: state.garden.activeGarden.plants
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantList)
