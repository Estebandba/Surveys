import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ChartWrapper from './components/Charts/ChartWrapper';
/* 
* App Component where the Dashboard is 
* initialized and where the route setup resides
*/

function App() {
  return (
    <Router>
      <div className="App" data-test='component-app'>
          <Navbar/>
          <div className="main-container">
            <Route path="/" exact component={Dashboard} />
            <Route path="/chart/:name" component={ChartWrapper} />                 
          </div>
      </div>
    </Router>
  );
}

export default App;
