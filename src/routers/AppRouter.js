import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import routes from './routes.js'

import PrivateRoute from './PrivateRoute.js'
export default () => {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes
            .map((route, index) =>
              <PrivateRoute
                key={index}
                path={route.path}
                component={route.component}
              />
            )
        }
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}