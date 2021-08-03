import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default ({
  component: Component,
  ...rest
}) => {
  const userToken = 'token'
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          userToken ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    </div>
  )
}