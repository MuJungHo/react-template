import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter.js'
import ConfigureStore from './configureStore.js'
import "./style/normalize.css"
export const store = ConfigureStore()

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default App
