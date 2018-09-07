import React, { Component } from 'react'
import requireAuth from '../requireAuth'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'
class Garden extends Component {
    componentDidMount = () => {
        if (!this.props.garden._id) {
            this.props.fetchGarden()
        }
    }
    
    render() {
        const { children } = this.props;

        const childrenWithProps = React.Children.map(children, child =>
          React.cloneElement(child, { garden: this.props.garden }));

          return (
            <div>
                <div className="row">
                    <div className="col-2">{childrenWithProps[0]}</div>
                    <div className="col-6">{childrenWithProps[1]}</div>
                    <div className="col-4">{childrenWithProps[2]}</div>
                </div>
                <div>{childrenWithProps[3]}</div>
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