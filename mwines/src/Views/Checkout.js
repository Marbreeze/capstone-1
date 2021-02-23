import React from 'react';
import {Row,Col, Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useCart} from '../Components/CartGlobalState';
import CheckoutDetail from '../Components/ChekoutDetail';
import Subtotal from '../Components/Subtotal';


const Checkout = () => {
    const [{basket}, dispatch] =useCart()
return (
        <>
        <Row>
            <Col md={8}>
                <div className="checkout">
                    {(localStorage.length === 0 && localStorage.getItem('cartItems') === null)
                    ?
                    (<Col>
                        <Row className="my-auto"><h4>Your cart is empty</h4></Row>
                    </Col>)
                    :
                    <Col>
                        {basket.map(item =>(
                    <CheckoutDetail cartItem = {item} />
                    ))}
                    </Col>}
                </div>
            </Col>
            <Col>
                <Card>
                    <Subtotal/>
                </Card>
            </Col>
        </Row>
        <Link to = "/"><Button className="btn-light block-btn" block>BACK TO WINES</Button></Link>
        </>
    )        
}

export default Checkout;
