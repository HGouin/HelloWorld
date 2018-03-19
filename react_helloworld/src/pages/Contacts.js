import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

export default class Contacts extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Contacts</h1>
            <div />
            <p className="lead">This is contacts.</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
