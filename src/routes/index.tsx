import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import PageNotFound from '../pages/PageNotFound'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route component={PageNotFound} />
  </Switch>
)

export default Routes
