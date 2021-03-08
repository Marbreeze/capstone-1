import React from 'react'
import {data} from '../data.json'
import {Row, Col} from 'react-bootstrap';
import CardImage from '../Components/CardImage';
import {Route} from 'react-router-dom';

const Home = ({history}) => {
    let newObj = {}
    if (history.location.pathname.includes("/search"))
        newObj = history.location.state.data
    else
        newObj = data
    return (
        <div>
            <h1>Specials</h1>
            <Row>
                {newObj ? newObj.map((product, i) => (
                <Col sm ={12} md= {6} lg={3}>
                   <Route>
                       <CardImage key ={i}
                            image = {product.image} 
                            price = {product.price} 
                            id ={product.id} 
                            name = {product.name}
                            manufacturer = {product.manufacturer}
                            quantity = {product.quantity}
                            category = {product.category}
                        />
                    </Route>
                </Col>
                )) : <h1>Not Found</h1>}
            </Row>
        </div>
    )
}

export default Home
