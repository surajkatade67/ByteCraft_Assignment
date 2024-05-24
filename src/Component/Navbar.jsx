import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className="dropdown">
          <a href="#home">Home</a>
          <div className="dropdown-content">
            <a href="#home1">Homepage 1</a>
            <a href="#home2">Homepage 2</a>
            <a href="#home3">Homepage 3</a>
            <a href="#home4">Homepage 4</a>
            <a href="#home5">Homepage 5</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#services">Services</a>
          <div className="dropdown-content">
            <a href="#service1">Service 1</a>
            <a href="#service2">Service 2</a>
            <a href="#service3">Service 3</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#project">Project</a>
          <div className="dropdown-content">
            <a href="#project1">Project 1</a>
            <a href="#project2">Project 2</a>
            <a href="#project3">Project 3</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#blog">Blog</a>
          <div className="dropdown-content">
            <a href="#blog1">Blog 1</a>
            <a href="#blog2">Blog 2</a>
            <a href="#blog3">Blog 3</a>
          </div>
        </li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-actions">
        <i className="search-icon" onClick={toggleSearch}>🔍</i>
        {showSearch && <input type="text" className="search-input" placeholder="Search..." />}
        <div className="dropdown">
          <button className="dropbtn">Language \/</button>
          <div className="dropdown-content">
            <a href="#german">German</a>
            <a href="#english">English</a>
            <a href="#more">More</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
