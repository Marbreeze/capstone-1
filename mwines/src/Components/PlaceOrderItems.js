import React from 'react';
import {Row, Col, ListGroup, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PlaceOrderItems = ({item, i}) => {
    return (
        <ListGroup.Item>
        <Row justify-content-start>
            <Col md={4} sm = {2} lg ={3} xl = {3}>
                <Image fluid rounded
                src={item.item.image}
                />
            </Col>
            <Col md ={5}>
                {item.item.name}
            </Col>
            <Col md={4}>
                <p>{item.numItems} x ${item.item.price} = ${item.numItems * item.item.price}</p>
            </Col>
            <Col md ={3}>
                <Link to={`/cart`}>Modify</Link>
            </Col>
        </Row>
    </ListGroup.Item>
    )
}

export default PlaceOrderItems
