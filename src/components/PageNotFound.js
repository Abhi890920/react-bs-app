import React from 'react'
import { Button,Jumbotron } from 'react-bootstrap';

function PageNotFound() {
  return (
    <>
      <Jumbotron>
        <h1>Page Not Found</h1>
        <p>
            <strong>Sorry!</strong> This page not available right now.
        </p>
        <p>
            <Button variant="primary">GO TO HOME</Button>
        </p>
        </Jumbotron>;
    </>
  )
}

export default PageNotFound
