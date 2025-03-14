import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const MenuNav = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#home">Control de Stock</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/"} className={"nav-link"}>Inicio</NavLink>
            <NavLink to={"/crearproducto"} className={"nav-link"}>Crear</NavLink>
            <NavLink to={"/filtrarproducto"} className={"nav-link"}>Filtrar</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default MenuNav;