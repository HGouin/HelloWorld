import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

const Example = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Whoa</h1>
          <div />
          <p className="lead">This is JUMBO.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
