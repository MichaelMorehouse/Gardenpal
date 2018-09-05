import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

class GardenCreate extends Component {
    onSubmit = (formProps) => {
        this.props.gardenCreate(formProps, () => {
            this.props.history.push('/garden')
        })
    }

    render() {
        const { handleSubmit } = this.props
        
        return (
          <form onSubmit={handleSubmit(this.onSubmit)}>
              <fieldset>
                  <label>Name</label>
                  <Field 
                    name="name"
                    type="text"
                    component="input"
                    autoComplete="none"
                  />
              </fieldset>
              <fieldset>
                  <label>Location</label>
                  <Field 
                    name="location"
                    type="text"
                    component="input"
                    autoComplete="none"
                  />
              </fieldset>
              <fieldset>
                  <label>Width</label>
                  <Field 
                    name="gardenX"
                    type="text"
                    component="input"
                    autoComplete="none"
                  />
              </fieldset>
              <fieldset>
                  <label>Length</label>
                  <Field 
                    name="gardenY"
                    type="text"
                    component="input"
                    autoComplete="none"
                  />
              </fieldset>
              <div>
                  {this.props.errorMessage}
              </div>
              <button>Create Garden</button>
          </form>
      )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.garden.createError }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'gardencreate'})
)(GardenCreate)