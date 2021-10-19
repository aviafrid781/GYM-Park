import React from 'react';
import { Form } from 'react-bootstrap/cjs';

const ContractUs = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write message</Form.Label>
                    <Form.Control as="textarea" rows={7} />
                </Form.Group>
            </Form>

        </div>


    );
};

export default ContractUs;