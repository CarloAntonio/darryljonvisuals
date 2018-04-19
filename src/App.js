import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

// Components
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Home from "./containers/home";
import About from "./containers/about";


export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar />

        {/* ============================================================
          Handles the routing of the website.
        ============================================================ */}
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" exact component={ About } />
        </Switch>

        <Footer />
      </div>
    );
  } // render()
} // App
