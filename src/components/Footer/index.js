import React from 'react';
import { Card } from 'react-bootstrap';

export default function Footer() {

    return (
        <>
        <Card bg="dark" text="white" style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Aprendendo ReactJS do Básico</Card.Title>
            </Card.Body>
        </Card>
        </>
    );
}