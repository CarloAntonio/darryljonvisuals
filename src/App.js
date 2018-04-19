import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

// Components
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";


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
