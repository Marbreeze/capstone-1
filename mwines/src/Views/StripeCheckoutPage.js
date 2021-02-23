import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {Col, Row} from 'react-bootstrap';
import MyCheckoutForm from '../Components/MyCheckoutForm';
import React from 'react';
import OrderPlace from '../Components/OrderPlace';

const stripePromise = loadStripe('pk_test_51ILaQJC12B2LY2YeXYTK9xRhp3TVcU0NotWZbnKDFqDbj7OGfhRjTGFamJ3vL12QcbvXFg3i9YwwWwejoNAvcPLe00hFqRLXdK');

const StripeCheckoutPage = ({history}) => {
    return (
            <Row>
                <Col md ={7}>
                <Elements stripe={stripePromise}>
                    <MyCheckoutForm history={history}/>
                </Elements>
                </Col>
                <Col md={5} >
                    <OrderPlace />
                </Col>
            </Row>
        )
    }

export default StripeCheckoutPage
