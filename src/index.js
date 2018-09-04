import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'
import Signup from './components/auth/Signup'
import Garden from './components/garden/Garden'
import Signout from './components/auth/Signout'
import Signin from './components/auth/Signin'
import Welcome from './components/Welcome'

const store = createStore(
    reducers,
    {
        auth: { authenticated: localStorage.getItem('token')}
    },
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" component={Welcome} />
                <Route path="/signup" component={Signup} />
                <Route path="/signout" component={Signout} />
                <Route path="/signin" component={Signin} />
                <Route path="/garden" component={Garden} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)