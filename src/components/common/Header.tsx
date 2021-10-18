import * as React from 'react';
import { Navbar, Nav, NavItem, Form,FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const Header: React.FC = () => (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Toy store</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  
    <Nav className="mr-auto">
    <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
    <Nav.Link as={NavLink} to='/another'>Today's chance</Nav.Link>
    <Nav.Link as={NavLink} to='/onemore'>Help</Nav.Link>
    </Nav>

    <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse> 
</Navbar>);

export default Header;