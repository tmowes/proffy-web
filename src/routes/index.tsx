import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from '../pages/Landing'
import PageNotFound from '../pages/PageNotFound'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route component={PageNotFound} />
  </Switch>
)

export default Routes
