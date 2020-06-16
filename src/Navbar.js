import React, { useState } from 'react';
import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './App.css';
import Logo from './news_1.png';

const NavbarNews = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <nav className="navbar navbar-light" expand="md">
                <div className="container">
                    <NavbarBrand href="/news-app"><img src={Logo} id="imgLogo" alt="Soft News" /></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/" ><b>Indonesia</b></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/" ><b>Lifestyle</b></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/"><b>Technology</b></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </nav>
        </div>
    );
}

export default NavbarNews;