import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './contact.css';

export default function Contact() {
    return (
        <Form className='contactContainer'>
            <h1>Contact</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
                <Form.Text className="text">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message:</Form.Label>
                <Form.Control as type="textarea" rows={3} placeholder="Enter message" />
            </Form.Group>
            <Button className='btn-small' variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
    
}