import React, { Component } from 'react';
import {Container,Row,Col,InputGroup,FormControl,Button } from 'react-bootstrap';


 class Footer extends Component {
  render() {
    return (
      <>
        <div className="newsLetter">
        <Container>
            <Row className="justify-content-sm-center">
                <Col sm="6">
                    <h4>Subscribe our newseletter</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <InputGroup>
                        <FormControl
                        placeholder="Enter your email address"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="secondary">Subscribe</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
         </Container>
        </div>
        <div className="footer">
            <Container>
                <Row>
                    <Col> Copyright  | 2019 All Rights & Reserved</Col>
                    <Col className="text-right">Website by <a target="_blank" href="http://www.abhijitmandal.me/"> Abhijit Mandal</a> </Col>
                </Row>
            </Container>
        </div>
      </>
    )
  }
}

export default Footer
