import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Home from './views/Home/Home'
import Album from './views/Album/Album'
import Sidebar from './components/Sidebar/Sidebar'
import './styles/App.css'
import {store} from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Sidebar />
          <main className="main">
            <Switch>
              <Route path="/album/:id">
                <Album />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  )
}

export default App
