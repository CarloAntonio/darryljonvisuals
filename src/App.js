import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

// Components
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";


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
          <Route path="/contact" exact component= { Contact } />
        </Switch>

        <Footer />
      </div>
    );
  } // render()
} // App
