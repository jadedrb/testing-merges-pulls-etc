import React from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Other from './pages/Other'
import Contact from './pages/FormUncontrolFunction'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// import images from './images'

class App extends React.Component {

  render() {

    // console.log(process.env.REACT_APP_API_KEY)
    return (
      <Router>
     
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/other'>Other</Link></li>
        </ul>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/profile' component={Profile} />
          <Route path='/contact' component={Contact} />
          <Route path='/other' component={Other} />
       </Switch>

      </Router>
    )
  }
}

export default App;









