import React from 'react'
import {Row, Col, Image, ListGroup, Card, Button,ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import data from '../data.json';
import {useCart} from '../Components/CartGlobalState'

const WineDetail = ({match}) => {
    const [{basket}, dispatch] = useCart();
    const product = data.data.find(item => item.id == match.params.id)

    const addToCart = () => {
        dispatch({
            type: "ADD",
            payload:{
                numItems:1,
                item: {
                    id:product.id,
                    name:product.name,
                    image:product.image,
                    category: product.category,
                    price:product.price,
                    quantity:product.quantity,
                    manufactorer:product.manufacturer
                }
            }
        })
        dispatch({
            type: "SET_TO_LOCAL_ADDCART",
        })
    }

    return (
        <div>
            <Row>
                <Col xs={6} md ={6} lg = {8}>
                <Image src={product.image} fluid/>
                </Col>
                <Col xs={6} md ={3} lg = {4}>
                <ListGroup variant = "flush" className = "">
                    <ListGroupItem className = "title">
                        <h3>{product.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h6>{product.manufacturer}</h6>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h6>{product.category}</h6>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h6>year: {product.year}</h6>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h6>Pair: {product.apperative}</h6>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h6>abv: {product.alcohol}%</h6>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h6>{product.description}</h6>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
            <Row>
                <Col md={{ span: 4, offset: 8 }}className = "card-price">
                <Card>
                    <ListGroup variant = "flush">
                    <ListGroupItem >
                        <h6>Price: ${product.price}</h6>
                    </ListGroupItem>
                    <ListGroupItem >
                        <h6>Status: { product.quantity > 0 ? "In Stock" : "Out of Stock" }</h6>
                    </ListGroupItem>
                    <Button varian="light"className="btn-light my-8" block disabled={ product.quantity == 0 } onClick = { addToCart }>Add to cart</Button>
                    </ListGroup>
                </Card>
                </Col>
            </Row>
            <Link to = "/"><Button className="btn-light block-btn" block> BACK TO WINES </Button></Link>
        </div>
    )
}

export default WineDetail
