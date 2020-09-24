import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,Button 
  } from 'reactstrap';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';

export default class NavMenu extends Component{
    render(){
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand >
                        <NavLink >
                            <Link to="/">Home</Link>
                        </NavLink>
                    </NavbarBrand>
                    <Collapse  navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink >
                                    <Link to="/products/">Product</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink >
                                    <Link to="/products/">Cart{0}</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}