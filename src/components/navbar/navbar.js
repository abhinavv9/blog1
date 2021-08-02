import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './navbar.css'
import Search from '../search/search';


const Navigation = () => {
    return (
        <div>
            <Navbar className="d-flex">
                <div className="nav-wrapper">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="navs">HOME</Nav.Link>
                            <Nav.Link href="#aboout" className="navs">ABOUT</Nav.Link>
                            <Nav.Link href="#Contact" className="navs">CONTACT</Nav.Link>
                            <Nav.Link href="#Blog" className="navs">BLOG</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </div>

            </Navbar>
            <div>
                <Search className="search" />
            </div>
        </div>
    )
}

export default Navigation
