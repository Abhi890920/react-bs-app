import React from 'react'
import Banner from './Banner'
import ProductLists from '../data/Products.json'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'



function Products() {

    return (
        <>
            <div className="bannerSec">
                <Banner pageTile="Ours Products">
                <p>This is a simple hero unit, a simple jumbotron-style <br/> component for calling
                        extra attention to featured content or information.</p>
                </Banner>
            </div>
            <div className="productsSec commonSec">
                <Container>
                    <Row >
                        
                      { ProductLists.map(
                            proLists =>  {
                                return(
                                        <Col sm={3} key= {proLists.id}>
                                            <Card className="proCard mb-3">
                                                <Card.Img variant="top" src={proLists.product_image_url} />
                                                <Card.Body>
                                                <Card.Title>{proLists.product_name}</Card.Title>
                                                <Card.Text>
                                                    Price {proLists.rate}
                                                </Card.Text>
                                                <Button variant="secondary"> {proLists.product_cta_text}</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                            
                               }

                            )
                        }

                    </Row>
                </Container>
            </div>
        </>
    )

   

}

export default Products
