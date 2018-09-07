import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'


var width;
var height;
class Canvas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseX: 0,
      mouseY: 0,
      width: 300,
      height: 300,
      changeType: '',
    }
    this.canvasRef = React.createRef();
    
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  componentDidMount = () => {
    this.updateCanvas()
  }

  componentDidUpdate = (prevProps, prevState) => {
    this.updateCanvas()
  }
 
  updateCanvas() {
    if (!this.props.garden || !height || !width) return
    const ctx = this.canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width, height)
    this.drawCanvasGrid(ctx);
    this.drawPlantedPlants(ctx)
  }

  drawCanvasGrid(ctx) {
    const gardenX = this.props.garden.gardenX
    const gardenY = this.props.garden.gardenY
    var gridX = []
    var gridY = []
    const normX = width / gardenX
    const normY = height / gardenY
    var floorX = Math.floor(gardenX)
    var floorY = Math.floor(gardenY)
    // To prevent gridline on borders if axes value is integer
    if (floorX === gardenX) floorX--
    if (floorY === gardenY) floorY--

    // Iterate through the integers of the garden dimensions, rounded down
    for (var i=1; i<=floorX; i++) {
      gridX.push(normX * i)
    }
    for (i=1; i<=floorY; i++) {
      gridY.push(normY * i)
    }
    for (i=0;i<gridX.length;i++) {
      ctx.beginPath()
      ctx.moveTo(gridX[i], 0)
      ctx.lineTo(gridX[i], height)
      ctx.stroke()
    }
    for (i=0;i<gridY.length;i++) {
      ctx.beginPath()
      ctx.moveTo(0, gridY[i])
      ctx.lineTo(width, gridY[i])
      ctx.stroke()
    }
  }

  drawPlantedPlants(ctx) {
    debugger
    if(this.props.garden.plants) {
      for (var i=0; i < this.props.garden.plants.length; i++) {
        const plant = this.props.garden.plants[i]
        const canvasX = plant.plantX * width / this.props.garden.gardenX
        const canvasY = plant.plantY * height / this.props.garden.gardenY
        const canvasR = 10 * width / this.props.garden.gardenX
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, canvasR, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }

  handleClick() {
    this.plantNew()
  }

  handleMouseMove(e) {
    this.setState({
      mouseX: e.pageX - this.canvasRef.current.offsetLeft,
      mouseY: e.pageY - this.canvasRef.current.offsetTop,
    })
  }

  plantNew() {
    this.props.plantNew({
      gardenId: this.props.garden._id,
      changeType: 'new',
      plantType: "Pepper",
      plantX: this.props.garden.gardenX * this.state.mouseX / width,
      plantY: this.props.garden.gardenY * this.state.mouseY / height
    })
  }


  render() {
    width = this.props.garden.gardenX * 50
    height = this.props.garden.gardenY * 50

    return (
      <canvas ref={this.canvasRef} width={width} height={height} 
              onMouseMove={this.handleMouseMove} 
              onClick={()=>this.handleClick()}
      />
    )
  }
}


export default connect(null, actions)(Canvas)