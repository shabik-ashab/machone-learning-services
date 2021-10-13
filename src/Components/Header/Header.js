import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import img from "../../image/logo.png";

const Header = (props) => {
    // handleClick function help the state to know page location 
    const {handleClick} = props;
    return (
        <div className="header ms-5 my-4">
            
            <nav className="d-flex align-items-center">
            <Link to="/login">
            <Button className="ms-5 rounded-pill p-3 px-5" variant="primary">Login Or Rrgister</Button>{' '}
            </Link>
            <div className="navbar-link">
            <NavLink onClick={() => handleClick('home')}  to="/home">Home</NavLink>
            <NavLink onClick={() => handleClick('service')} to="/services">Service</NavLink>
            <NavLink to="/blogs">blogs</NavLink>           
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About Us</NavLink>
            </div>
            <img src={img} className="nav-img ms-5" />
            </nav>
        </div>
    )
}

export default Header;
