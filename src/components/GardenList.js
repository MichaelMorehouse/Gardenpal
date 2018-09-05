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
        {Object.keys(garden).map((prop, i) =>
            <div key={i}>{prop}: {garden[prop]}</div>
        )}
        <br />
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
