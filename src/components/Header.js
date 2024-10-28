import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import './Header.css';
const Header = () => {
    return (
        <header className="header">
            <label>KG CAR CARE, COIMBATORE</label>
            <FaGlobe icon="fa-solid fa-globe" />
            <span>9384530403</span>
        </header>
    );
};
export default Header;
