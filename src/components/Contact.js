import React, { Component } from 'react'
import Banner from './Banner';
import { Button,Container,Row,Col,Form } from 'react-bootstrap';
class Contact extends Component {

constructor(props) {
  super(props)

  this.state = {
     name:'',
     email:'',
     subject:'webdesign',
     message:''
  }
}

nameHandaler = event => {
  this.setState({
    name: event.target.value
  })
}
emailHandaler = event => {
  this.setState({
    email: event.target.value
  })
}
subjectHandaler = event => {
  this.setState({
    subject: event.target.value
  })
}
commentHandaler = event => {
  this.setState({
    comment: event.target.value
  })
}
 
submitHandaler = event => {
  alert( `
   Name: ${this.state.name}
   Emali: ${this.state.email}
   Subject: ${this.state.subject}
   Comment: ${this.state.comment}

   ` )
   event.preventDefault()
}

  render() {
    return (
      <>
      <div className="bannerSec">
       <Banner pageTile="Contact Us">
         <p>This is a simple hero unit, a simple jumbotron-style <br/> component for calling
              extra attention to featured content or information.</p>
       </Banner>
      </div>
      <div className="contactSec">
        <Container>
          <Row>
            <Col sm={6}>
              <div className="conBox">
                  <div className="con-icon"> <i className="fas fa-envelope"></i> </div>
                  <div className="con-content">
                      <h3>Email</h3>
                      <p>click2avi@gmail.com</p>
                  </div>
              </div>
              <div className="conBox">
                  <div className="con-icon"> <i className="fas fa-phone-square"></i> </div>
                  <div className="con-content">
                      <h3>Phone</h3>
                      <p>+91 9836627402/7890088140</p>
                  </div>
              </div>
              <div className="conBox">
                  <div className="con-icon"> <i className="fas fa-map-marker-alt"></i> </div>
                  <div className="con-content">
                      <h3>Location</h3>
                      <p>49/2A, B.P.Township,Patuli, Kolkata-700092</p>
                  </div>
              </div>
            </Col>
            <Col sm={6}>
             <h3>Fill free to contact us</h3>
              <Form onSubmit={this.submitHandaler}>
                <Row>
                  <Col sm={6}> 
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Your name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" value={this.state.name} onChange={this.nameHandaler}/>
                    </Form.Group>
                  </Col>
                  <Col sm={6}> 
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" value={this.state.email}  onChange={this.emailHandaler}/>
                    </Form.Group>
                  </Col>
                  <Col sm={6}> 
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Subject</Form.Label>
                      <Form.Control as="select" value={this.state.subject}  onChange={this.subjectHandaler}>
                        <option value="webdesign">Web design</option>
                        <option value="webdevelopment">Web development</option>
                        <option value="ecomers">Ecomrrs</option>
                        <option value="seo">SEO</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col sm={12}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows="3" value={this.state.comment}  onChange={this.commentHandaler}/>
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit">   Submit </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      </>
    )
  }
}

export default Contact
