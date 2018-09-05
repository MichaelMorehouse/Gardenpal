import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class GardenDetail extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        IM THE GARDEN DETAILS
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(GardenDetail)
