import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <div className="App-header">
              <h2>Welcome to React</h2>
              <Link to="/">Home</Link>
              <Link to="/otherpage">Other Page</Link>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
                <Route exact path="/" component={Fib} />
                <Route path="/otherpage" component={OtherPage} />
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
