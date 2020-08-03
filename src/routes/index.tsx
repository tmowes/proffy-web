import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from '../pages/Landing'
import TeacherForm from '../pages/TeacherForm'
import TeacherList from '../pages/TeacherList'

import PageNotFound from '../pages/PageNotFound'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />

    <Route path="/study" component={TeacherList} />
    <Route path="/give-classes" component={TeacherForm} />

    <Route component={PageNotFound} />
  </Switch>
)

export default Routes
