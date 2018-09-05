import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PlantList extends Component {

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
