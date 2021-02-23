import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {NavLink,Navbar, Nav, Container } from 'react-bootstrap';
import {useCart} from './CartGlobalState';
import SearchBar from './SearchBar';
import {Route} from 'react-router-dom'

const Header = () => {
    const [{basket}] = useCart();
    const qttlocalStorage = (localStorage.length > 0 ? (JSON.parse(localStorage.getItem('cartItems')).reduce((acc, item) => acc += item.numItems, 0)): [])
    return (
        <header>
            <Navbar className = "navbar" expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to ="/">
                    <Navbar.Brand className ="nav-home" id="mvines">MWines</Navbar.Brand>
                </LinkContainer>
                    <Navbar.Toggle aria-controls = 'basic-navbar-nav'/>
                    <Navbar.Collapse id = 'basic-navbar-nav'>
                    <Route render ={({history}) => <SearchBar history = {history}/>}/>
                    <Nav className = 'ml-auto wrapper' > 
                    <LinkContainer  exact to = "/wines">
                        <NavLink id = "nav-li">Wines</NavLink>
                    </LinkContainer>
                    <LinkContainer exact to = "/cart">
                        <NavLink>Cart{basket.length}</NavLink>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse> 
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
