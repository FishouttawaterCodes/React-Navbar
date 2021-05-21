import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';


function App() {
  return (
    <>
      <Router>
          <Navbar />

          <div className="pages">
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/blog" component={Blog}></Route>
                <Route path="/contact" component={Contact}></Route>
              </Switch>
          </div>
      </Router>
    </>
  );
}

export default App;
