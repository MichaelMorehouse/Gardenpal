import React, { Component } from 'react'
import requireAuth from './requireAuth'
import Canvas from './Canvas'
import GardenDetail from './GardenDetail'
import PlantingBar from './PlantingBar' 
import PlantList from './PlantList'
class Feature extends Component {
    render() {
      return (
        <div>
          <PlantingBar />
          <Canvas />
          <PlantList />
          <GardenDetail />
        </div>
      )
    }
}

export default requireAuth(Feature)