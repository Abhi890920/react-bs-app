import React, { Component } from 'react'
import Banner from './Banner';

import { Container,Row,Col } from 'react-bootstrap'
import axios from 'axios'

class Gallery extends Component {

constructor(props) {
  super(props)

  this.state = {
     posts:[],
     errorMessage:''
  }
}

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/photos/')
    .then(response =>{
        console.log(response)
        this.setState({
            posts: response.data
        })
    })
    .catch( error => {
        console.log(error)
        this.setState({
            errorMessage: 'Error Retreiving Data'
        })
    })

}

  render() {
      const { posts , errorMessage } = this.state
    return (
      <>
        <div className="bannerSec">
            <Banner pageTile="Our Gallery">
            <p>This is a simple hero unit, a simple jumbotron-style <br/> component for calling
                    extra attention to featured content or information.</p>
            </Banner>
        </div>
        <div className="gallerySec">
            <Container>
                <Row className="">

                    {
                        posts.length ?
                        posts.map(
                            posts => 
                                <Col sm={3} key= {posts.id}>
                                    <div className="post-slide">
                                        <div className="post-img">
                                            <span className="over-layer"></span>
                                            <img src={posts.url} alt=""/>
                                        </div>
                                        <p>{posts.title}</p>
                                    </div>
                                </Col>
                            ):
                            null
                    }
                    {
                        errorMessage ? <h4 className="text-danger">{errorMessage}</h4> : null
                    }

                </Row>
            </Container>
        </div>
      </>
    )
  }
}

export default Gallery

