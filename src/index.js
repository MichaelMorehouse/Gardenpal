import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import './style.css'
import reducers from './reducers'
import App from './components/App'
import Signup from './components/auth/Signup'
import Garden from './components/garden/Garden'
import Signout from './components/auth/Signout'
import Signin from './components/auth/Signin'
import Splash from './components/Splash'
import GardenList from './components/GardenList'
import GardenCreate from './components/GardenCreate'

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
                <Route exact path="/" component={Splash} />
                <Route path="/signup" component={Signup} />
                <Route path="/signout" component={Signout} />
                <Route path="/signin" component={Signin} />
                <Route path="/garden" component={Garden} />
                <Route path="/creategarden" component={GardenCreate} />
                <Route path="/gardenlist" component={GardenList} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)