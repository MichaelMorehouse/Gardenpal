import React, { Component } from 'react'
import requireAuth from '../requireAuth'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Canvas from './Canvas'
import GardenDetail from './GardenDetail'
import PlantingBar from './PlantingBar' 
import PlantList from './PlantList'

class Garden extends Component {
    componentDidMount = () => {
        if (!this.props.garden._id) {
            this.props.fetchGarden()
        }
    }
    
    render() {
          return (
            <div>
                <div className="row">
                    <div className="col-2"><PlantingBar /></div>
                    <div className="col-6"><Canvas /></div>
                    <div className="col-4"><GardenDetail /></div>
                </div>
                <div><PlantList /></div>
            </div>
        ) 
    }
}

const mapStateToProps = state => ({
    garden: state.garden.activeGarden
})

export default compose(
    connect(mapStateToProps, actions),
    requireAuth
)(Garden)