import React, { Component } from 'react';
import "./components/FontawesomeIcons";
import './App.css';
import SideNav from "./components/SideNav.js"
import Branding from "./components/Branding.js"
import Dashboard from "./pages/Dashboard.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideNav />
      <Branding />
      <Dashboard />
      </div>
    );
  }
}

export default App;
