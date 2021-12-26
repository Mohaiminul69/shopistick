import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <Container className="mt-5">
            <Row >
                <Col md={6} xs ={12} className="p-5">
                    <h4>Billing Details</h4>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name"  />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name"  />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Phone </Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Confirm My Details" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={6} xs ={12} className="p-5">
                    <h4>Your Order</h4>
                    <Row>
                        <Col>
                            <h5>Products</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Col>
                        <Col>
                        <h5>Total</h5>
                            <p>100</p>
                        </Col>
                        <Button style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: "1",
                            display: 'inline-block',
                            padding: "18px 63px 17px",
                            textTransform: "uppercase",
                            color: "white",
                            borderRadius: "50px",
                            backgroundColor: "#6f42c1",
                            border: "none",
                        }}>Place Order</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckOut;