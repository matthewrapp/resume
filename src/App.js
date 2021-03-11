import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './Contents/Home';
import About from './Contents/About';
import Education from './Contents/Education';
import Skills from './Contents/Skills';
import Contact from './Contents/Contact';
import Sidebar from './Components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />           
          <Route exact path={process.env.PUBLIC_URL}>
            <Home />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/about'}>
            <About />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/education'}>
            <Education />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/skills'}>
            <Skills />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/contact'}>
            <Contact />
          </Route>
      </div>
      </Router>
    )
  }
}

export default App;
 