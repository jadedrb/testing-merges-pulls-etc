import React from 'react'
import About from './pages/About'
import Profile from './pages/Profile'
import Home from './pages/Home'

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class App extends React.Component {



  render() {
    return (
      <div>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
