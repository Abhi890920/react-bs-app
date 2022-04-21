import React, { Component } from 'react'
import { Button,Jumbotron } from 'react-bootstrap';

export class Banner extends Component {
  render() {
    return (
        <Jumbotron>
          <h1>{this.props.pageTile}</h1>
          {this.props.children}
        </Jumbotron>
    )
  }
}

export default Banner
