import React from "react"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

function Jumbotron(){
    return(
        <Container fluid>
        <div className="bg-light pb-5 rounded-bottom my-3 mx-3">
            <h1 className="display-1 fw-normal mx-5">A Warm Welcome</h1>
            <p className="mx-5 fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore, nulla iusto deserunt, perferendis tempora eum ullam beatae laboriosam eius ut, dignissimos accusantium quos sequi! Asperiores veritatis pariatur voluptatibus</p>
        <Button variant="primary mx-5 mb-5">Call to Action!</Button>
        </div>
        </Container>
    )
}

export default Jumbotron