import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'


export class Services extends Component {
  render() {
    return (
        <div className="servicesSec">
            <Container>
            <h2 className="text-center">Our Servicess</h2>
            <Row>
                <Col sm={3}>
                <div className="serviceBox">
                    <div className="service-icon">
                        <span><i className="fas fa-globe"></i></span>
                    </div>
                    <div className="service-content">
                        <h3 className="title">Web Design</h3>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in volutpat elit.</p>
                        <a href="#" className="read-more fa fa-plus"></a>
                    </div>
                </div>
                </Col>
                <Col sm={3}>
                <div className="serviceBox green">
                    <div className="service-icon">
                        <span><i className="fa fa-rocket"></i></span>
                    </div>
                    <div className="service-content">
                        <h3 className="title">WEB DEVELOPMENT</h3>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in volutpat elit.</p>
                        <a href="#" className="read-more fa fa-plus"></a>
                    </div>
                </div>
                </Col>
                <Col sm={3}>
                <div className="serviceBox blue">
                    <div className="service-icon">
                        <span><i className="fas fa-briefcase"></i></span>
                    </div>
                    <div className="service-content">
                        <h3 className="title">Brand Building</h3>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in volutpat elit.</p>
                        <a href="#" className="read-more fa fa-plus"></a>
                    </div>
                </div>
                </Col>
                <Col sm={3}>
                <div className="serviceBox orange">
                    <div className="service-icon">
                        <span><i className="fas fa-mobile"></i></span>
                    </div>
                    <div className="service-content">
                        <h3 className="title">RESPONSIVE DESIGN</h3>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in volutpat elit.</p>
                        <a href="#" className="read-more fa fa-plus"></a>
                    </div>
                </div>
                </Col>
            
            </Row>
            </Container>
        </div>

    )
  }
}

export default Services
