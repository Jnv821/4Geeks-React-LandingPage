import React from "react"
import { Container } from "react-bootstrap";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from "react-bootstrap/Button"

function GroupOfCards() {
    return (
    <Container fluid>
        <CardGroup className="my-4">
        <Card className="mx-3 rounded text-center">
            <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
                <Card.Body>
                <Card.Title className="fw-bold">Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white">
                <Button variant="primary">Find out more</Button>
            </Card.Footer>
        </Card>
        <Card className="mx-3 rounded border text-center">
            <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
                <Card.Body>
                <Card.Title className="fw-bold">Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white">
                <Button variant="primary">Find out more</Button>
            </Card.Footer>
        </Card>
        <Card className="mx-3 rounded border text-center">
            <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
                <Card.Body>
                <Card.Title  className="fw-bold">Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white">
                <Button variant="primary">Find out more</Button>
            </Card.Footer>
        </Card>
        <Card className="mx-3 rounded border text-center">
            <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
                <Card.Body>
                <Card.Title  className="fw-bold">Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white">
                <Button variant="primary">Find out more</Button>
            </Card.Footer>
        </Card>
    </CardGroup>
    </Container>
);
}

export default GroupOfCards;