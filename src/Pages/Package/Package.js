import React from 'react';
import { Button } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap/cjs';
import { Card } from 'react-bootstrap/cjs';
import './package.css'

const Package = () => {
    return (

        <>
            <CardGroup>
                <Card>

                    <Card.Body>
                        <Card.Header style={{ color: 'red' }}>Studant Package</Card.Header>

                        <Card.Title>25% discount</Card.Title>
                        <Card.Text>
                            It is vary good news for studant.to get dis discount
                        </Card.Text>
                        <Button variant="success">Purchase</Button>{' '}

                    </Card.Body>


                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>

                    <Card.Body>
                        <Card.Header style={{ color: 'red' }} >Monthly Package</Card.Header>

                        <Card.Title>10% discount</Card.Title>
                        <Card.Text>
                            If you want to get this .You will be 5% discount
                        </Card.Text>
                        <Button variant="success">Purchase</Button>{' '}

                    </Card.Body>

                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>

                    <Card.Body>
                        <Card.Header style={{ color: 'red' }}>1 Year Package</Card.Header>

                        <Card.Title>50% discount </Card.Title>
                        <Card.Text>
                            If you purchase this.You will be more helpfull.There are more discount
                        </Card.Text>
                        <Button variant="success">Purchase</Button>{' '}

                    </Card.Body>

                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>


            </CardGroup>
            <br />
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header style={{ color: 'red' }}>Special discount </Card.Header>
                <Card.Body>
                    <Card.Title>For Female person</Card.Title>
                    <Card.Text>
                        plase contract
                    </Card.Text>
                    <Button variant="success">Purchase</Button>{' '}

                </Card.Body>

            </Card>
            <br />



        </>

    );
};

export default Package;