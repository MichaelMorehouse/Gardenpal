import React, { Component } from 'react'
import { connect } from 'react-redux'
export class GardenDetail extends Component {
  renderDetails() {
    if (this.props.garden) {
      return (
        <div>
          <div>Name: {this.props.garden.name}</div>
          <div>Dimensions: {this.props.garden.gardenX} x {this.props.garden.gardenY}</div>
          <div>Location: {this.props.garden.location}</div>
        </div>
      )
    } else {
      return (
        <div>Activate a garden!</div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderDetails()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  garden: state.garden.activeGarden
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(GardenDetail)
