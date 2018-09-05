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
  
  renderGardenList = () => this.props.gardens.map(garden => <p key={garden._id}>{garden.name}</p>)
      
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
