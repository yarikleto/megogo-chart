import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'

import MainPage from 'pages/Main'
import rootStyles from 'theme/rootStyles'

import rootReducer from 'reducers'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // TODO: Disable for production
)


if (!PRODUCTION) {
  module?.hot?.accept()
  window.__STORE__ = store
}

render(
  <>
    <ReduxProvider store={store}>
      <MainPage />
    </ReduxProvider>
    <style jsx global>{rootStyles}</style>
  </>,
  document.getElementById('root')
)