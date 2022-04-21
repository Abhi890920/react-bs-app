import React from 'react'
import Banner from './Banner';
import img_1 from '../img/worlds.gif';
import img_2 from '../img/dribbble.gif';
import { Container,Row,Col } from 'react-bootstrap';

function About() {
  return (
    <>
    <div className="bannerSec">
     <Banner pageTile="About Us">
       <p>This is a simple hero unit, a simple jumbotron-style <br/> component for calling
            extra attention to featured content or information.</p>
     </Banner>
    </div>
    <div className="aboutSec">
      <Container>
        <Row className="">
          <Col sm={6}>
            <h3>About our company</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>  
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
              sequi nesciunt. Neque porro quisquam est.</p>
          </Col>
          <Col sm={6} className="mb-5">
              <img className="img-fluid" src={img_1} alt="" />
          </Col>
          <Col sm={6}>
              <img className="img-fluid" src={img_2} alt="" />
          </Col>
          <Col sm={6}>
            <h3>Our vision and mission</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>  
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
              sequi nesciunt. Neque porro quisquam est.</p>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default About
