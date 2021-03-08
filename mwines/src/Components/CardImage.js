import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useCart} from './CartGlobalState';

const CardImage = ({id, name, image, category, price, quantity, manufacturer}) => {
    const [{}, dispatch] = useCart();

    const addToCart = () =>{
        dispatch({
            type: "ADD",
            payload:{
               numItems:1,
               item:{id,name,image,category,price,quantity,manufacturer}
            }
        })
        dispatch({
            type: "SET_TO_LOCAL_ADDCART",
        })
    }

    return (
        <div>
            <Card style={{width: '18rem' }} className= "my-3 p-2 rounded">
                <Link to ={`productdetail/${id}`}><Card.Img variant="top" src={image}/></Link>
            <Card.Body>
                <Card.Title className = ""><strong>{name}</strong></Card.Title>
                <Card.Text  className= "text-color">{category}</Card.Text>
                <Card.Text as ="h4" className = "price">${price}</Card.Text>
                <Link to ={`/productdetail/${id}`}><Button className = "unique" variant="light">Details</Button></Link>
                <Button  variant="light" onClick ={addToCart}>Add to Cart</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default CardImage;
