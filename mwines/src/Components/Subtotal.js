import React from 'react';
import {subtotalQtt, subtotalPrice} from './CartGlobalState';
import {useCart} from './CartGlobalState';
import {Col, Card, Button, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Subtotal = () => {
    const[{basket}, dispatch]= useCart();
    

    const checkoutSubmit =()=>{
        console.log('submited')
    }

    return (
        <Card>
        <ListGroup>
            <ListGroup.Item>
            <Col>
            <h2>QTT: {subtotalQtt(basket)}</h2>
            <h2>TOTAL: ${subtotalPrice(basket)}</h2>
            </Col>
            </ListGroup.Item>
           <Link to ="/payment&shipping">
               <Button block varian="light" className="btn-light proceed-checkout" lg onClick = {checkoutSubmit}>
                   Proceed to Checkout
                </Button>
            </Link>
           </ListGroup>
        </Card>
    )
}

export default Subtotal
