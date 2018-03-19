import React, { Component } from "react";
import "./App.css";
import TopNav from "./nav/TopNav.js";
import Router from "./nav/Router.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Router />
      </div>
    );
  }
}
