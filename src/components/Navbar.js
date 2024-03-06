import React from 'react';
import {Link} from "react-router-dom-v5-compat";
import './navbar.css'
import imgSvg from '../img/heart-svg.png'
import imgSvg2 from '../img/heart-svg2.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav'>
                <img className='images' src={imgSvg} alt=""/>
                <img className='images' src={imgSvg2} alt=""/>
                <img className='images' src={imgSvg} alt=""/>
                <li className='text-nav'>
                    <Link to={'/cards'}>
                        <h1>Cards</h1>
                    </Link>
                </li>
                <img className='images' src={imgSvg} alt=""/>
                <img className='images' src={imgSvg2} alt=""/>
                <img className='images' src={imgSvg} alt=""/>
                <h1>
                    Homework 7
                </h1>
                <img className='images' src={imgSvg} alt=""/>
                <img className='images' src={imgSvg2} alt=""/>
                <img className='images' src={imgSvg} alt=""/>
                <li>
                    <Link to={'/createCards'}>
                        <h1>CreateCards</h1>
                    </Link>
                </li>
                <img className='images' src={imgSvg} alt=""/>
                <img className='images' src={imgSvg2} alt=""/>
                <img className='images' src={imgSvg} alt=""/>
            </ul>
        </nav>
    );
};

export default Navbar;