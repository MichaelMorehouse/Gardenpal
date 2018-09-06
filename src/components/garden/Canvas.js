import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
class Canvas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseX: 0,
      mouseY: 0,
      width: 0,
      height: 0
    }

    this.canvasRef = React.createRef();

    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  componentDidMount = () => {
    this.setCanvasDimensions()
  }

  setCanvasDimensions = () => {
    this.setState({
      width: this.props.garden.width * 100,
      height: this.props.garden.length * 100
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    this.updateCanvas()
  }
  
  updateCanvas() {
    const ctx = this.canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, 300,300)
  }

  handleMouseMove(e) {
    this.setState({
      mouseX: e.pageX - this.canvasRef.current.offsetLeft,
      mouseY: e.pageY - this.canvasRef.current.offsetTop,
    })
  }

  render() {
    return (
      <canvas ref={this.canvasRef} width={this.props.width} height={this.props.height} 
              onMouseMove={this.handleMouseMove} 
              onClick={()=>this.props.PLANT_NEW({
                gardenId: this.props.gardenId,
                change: 'new',
                plantType: "Pepper",
                plantX: this.props.gardenX * this.state.mouseX / this.props.width,
                plantY: this.props.gardenY * this.state.mouseY / this.props.height
              })}
              // onMouseOver={this.handleMouseOver}
              // onMouseOut={this.handleMouseOut}
      />
    )
  }
}

export default connect(mapStateToProps, actions)(Canvas)