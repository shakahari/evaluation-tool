import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Homepage from './containers/Homepage'
import SignIn from './containers/SignIn'
import SignUp from './containers/SignUp'
import Batch from './containers/Batch'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/batches/:batchId" component={Batch} />
      </div>
    )
  }
}
