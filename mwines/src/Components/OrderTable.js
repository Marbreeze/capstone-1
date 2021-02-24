import React from 'react';
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import {useCart} from './CartGlobalState';
import PlaceOrderItems from './PlacedToOrder';


const OrderTable = () => {
    const[{basket}, dispatch]= useCart();
    const savedInStorage = (localStorage.length > 0 ? (JSON.parse(localStorage.getItem('cartItems'))) : []);

    const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
    }

    const totalQuantity = addDecimals (Number(savedInStorage.reduce((acc, item) =>acc + item.numItems,0)));
    const itemsPrice = addDecimals(Number(savedInStorage.reduce((acc, item) => acc + item.item.price * item.numItems,0).toFixed(2)));
    const totalTax = addDecimals (Number((0.15 * itemsPrice).toFixed(2)));
    const totalShipmentAmount = Number(itemsPrice  < 100 ? 10 : 0);
    const totalPriceAmmount = (Number(totalQuantity) + Number(itemsPrice) + Number(totalTax) + totalShipmentAmount).toFixed(2);

    return (
        <>
           <Row>
               <Col>
                <ListGroupItem>
                    <h2>Order Items</h2>
                    <ListGroup variant = 'flush'>
                       {(localStorage.length && localStorage.getItem('cartItems') !== null) 
                       ? (savedInStorage.map((item, i) => <PlaceOrderItems  item = {item} key = {i}/>))
                        : <div>No items</div>}
                   </ListGroup>
                   </ListGroupItem>
               </Col>
           </Row>    
              <Row>
              <ListGroup variant='flush'>
              <ListGroup.Item>
                <h4>Order Summary</h4>
              </ListGroup.Item>

              <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row className = "mx-md-n5">
                  <Col md ={1} lg = {2} className ="px-md-5" style={{margin:'3px'}}> Items {totalQuantity}</Col>
                  <Col md ={2} lg = {2} className ="px-md-5" style={{margin:'3px'}}> Shippment  ${totalShipmentAmount}</Col>
                  <Col md ={2} lg = {2} className ="px-md-5" style={{margin:'3px'}}> Price ${itemsPrice}</Col>
                  <Col md ={1} lg = {2} className ="px-md-5" style={{margin:'3px'}}> Tax ${totalTax}</Col>
                  <Col md ={2} lg = {2} className ="px-md-5" style={{margin:'3px'}}> Total Ammount ${totalPriceAmmount} </Col>
                </Row>
              </ListGroup.Item>
              </ListGroup>
              </ListGroup>
              </Row>
            </>                            
    )
}

export default OrderTable;
