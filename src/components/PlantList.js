import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class PlantList extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        IM THE PLANT LIST
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantList)
