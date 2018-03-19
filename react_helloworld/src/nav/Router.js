import React, { Component } from "react";
import { Label } from "reactstrap";
import { PageName } from "./PageName.js";
import About from "../pages/About.js";
import Contacts from "../pages/Contacts.js";
import Home from "../pages/Home.js";
import Calculator from "../pages/Calculator.js";

export default class Router extends Component {
  loadPage() {
    var path = window.location.pathname;
    if (!path) path = PageName.HOME;
    if (path === "") path = PageName.HOME;
    if (path.length > 1 && path[path.length - 1] === "/") {
      path = path.slice(0, -1);
    }
    switch (path.toLowerCase()) {
      case PageName.HOME:
        return <Home />;
      case PageName.ABOUT:
        return <About />;
      case PageName.CONTACTS:
        return <Contacts />;
      case PageName.CALCULATOR:
        return <Calculator />;
      default:
        return <Label>This page is blank</Label>;
    }
  }
  render() {
    return (
      <div
        style={{
          marginTop: 56,
          position: "absolute",
          width: "100%",
          height: "calc(100% - 56px)",
          overflowY: "scroll"
          //paddingTop: 20
        }}
      >
        {this.loadPage()}
      </div>
    );
  }
}
