import React, { useEffect, useState, useReducer} from 'react';
import {Row, Col, Image, Card, Button,ListGroupItem, Form} from 'react-bootstrap';
import {useCart} from './CartGlobalState';

const ChekoutDetail = ({cartItem}) => {
        const[{basket}, dispatch]= useCart()
        const [quantityadd, setQuantityadd] = useState(cartItem.numItems)
   
        useEffect(() => {
            dispatch({
                type: "REMOVE_BUTTON",
            })
        }, [basket])


    const setQuantity = (e) => {
        const val = (e.target.value)
        setQuantityadd(val)
        dispatch({
            type: "QUANTITY_CHANGE",
            payload:{
                id:cartItem.item.id,
                val:val
            }  
        })
        dispatch({
            type: "SET_TOLOCALQTT",
        })
    }
    

    const removeItem = () =>{
        dispatch({
        type:"REMOVE",
        payload:{
        id: cartItem.item.id,
        }
    });
}

return (
    <div>
        <Card>
            <Row>
                <Col  md={4} xs = {6} >
                    <Image src={cartItem.item.image} fluid/>
                </Col>
                    <Col>
                    <Card.Body>
                        <Card.Title ><strong>{cartItem.item.name}</strong></Card.Title>
                        <Card.Text  className= "text-color">{cartItem.item.category}</Card.Text>
                        <Card.Text as ="h4" className = "price">${cartItem.item.price}</Card.Text>
                        <Col>
                            {cartItem.item.quantity > 0 && 
                            (<Row>
                                <Col style={{textAlign:"right"}}><p>Qty</p></Col>
                                <Col md={6} lg ={6} >
                                    <Form.Control  
                                    as ='select'
                                    value = {quantityadd}
                                    onChange = {setQuantity}>
                                    {[...Array(cartItem.item.quantity).keys()].map(x => (
                                    <option key = {x+1} value = {x+1}>
                                    {x+1}
                                    </option>))}
                                    </Form.Control>
                                    </Col>
                            </Row>)}
                        </Col>
                        <Col >
                            <Button className = "btn-light" variant ="default" lg onClick={removeItem}>Remove</Button>
                        </Col>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </div>
    )
}

export default ChekoutDetail
