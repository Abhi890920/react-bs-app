import React from 'react'
import Banner from './Banner'
import { Button,Container,Row,Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

import Teams from './Teams'
import Testimoni from './Testimoni';
import Services from './Services';





function Home() {
  return (
    <>
    <div className="bannerSec">
     <Banner pageTile=" React Bootstrap Learning Template">
       <p>This is a simple hero unit, a simple jumbotron-style <br/> component for calling
            extra attention to featured content or information.</p>
        <p>
          <Link to="/about"><Button variant="light">Learn more</Button></Link> 
        </p>    
     </Banner>
    </div>
   
    <Services/>
    <Testimoni/>
    <Teams/>   
 
    <div className="counterSec">
        <Container>
          <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="counter">
                    <span className="counter-value">1652</span>
                    <h3 className="title">Web Design</h3>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="counter ">
                    <span className="counter-value">1250</span>
                    <h3 className="title">Web Development</h3>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="counter">
                    <span className="counter-value">856</span>
                    <h3 className="title">BRAND BUILDING</h3>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="counter ">
                    <span className="counter-value">1752</span>
                    <h3 className="title">RESPONSIVE DESIGN</h3>
                </div>
            </div>
          </div>
       </Container>
    </div>
    
    </>
  )
}

export default Home
