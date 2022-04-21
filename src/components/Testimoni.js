import React, { Component } from 'react'

import {Container,Carousel } from 'react-bootstrap'

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';

export class Testimoni extends Component {
  render() {
    return (
        <div className="testimonialSec">
            <Container>
            <h2 className="text-center mb-5">Testimonial</h2>
            <Carousel controls="false">
                <Carousel.Item>
                    <div className="testimonial">
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolor ipsum molestias mollitia ut. Aliquam aperiam corporis cumque debitis delectus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <div className="testimonial-content">
                            <div className="pic">
                                <img src={img1}/>
                            </div>
                            <h3 className="title">williamson</h3>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="testimonial">
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolor ipsum molestias mollitia ut. Aliquam aperiam corporis cumque debitis delectus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <div className="testimonial-content">
                            <div className="pic">
                                <img src={img2}/>
                            </div>
                            <h3 className="title">williamson</h3>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

            </Container>
        </div>
    
    )
  }
}

export default Testimoni
