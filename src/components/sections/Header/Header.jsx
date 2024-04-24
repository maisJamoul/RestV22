import React from 'react'

import NavItem from './../../Container/NavItem/NavItem';
import {Link } from 'react-router-dom';
import { NavHashLink as LinkHash } from 'react-router-hash-link';
const Header=()=> {
  return (
    <div className="HNav container-fluid  mx-0 px-0">
      <nav className="navbar navbar-expand-lg bg-white ">
        <div className="container-fluid">
          <a className="navbar-brand text-danger fw-bolder" href="/">
            Yummy
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto d-flex justify-content-center align-items-center" >
             
                <NavItem>
                    <Link className="nav-link text-danger" to="/">Home</Link > 
                </NavItem>
                <NavItem>
                  <LinkHash 
                    //  spy={true} 
                     smooth={true} 
                     offset={50} 
                     duration={500} 
                     to="/#menu" 
                     activeClass="active" 
                     className="text-danger"
                     
                  >
                    Menu
                  </LinkHash>
                </NavItem>
              <NavItem>
                <LinkHash 
                  // spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500} 
                  to="/#about" 
                  activeClass="active" 
                  className="text-danger"
                 
                >
                  About 
                </LinkHash>
              </NavItem>
              
              <NavItem>      
                  <LinkHash 
                    // spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    to="/#chefs" 
                    activeClass="active" 
                    className="text-danger"
                    
                    >
                    Chefs
                  </LinkHash>
                </NavItem>

              <NavItem>
                <LinkHash 
                  // spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500} 
                  to="/#contact" 
                  activeClass="active" 
                  className="text-danger" 
                  isActive={true} 
                >
                Concat Us
                </LinkHash>
              </NavItem>
              <NavItem>
                  <Link className="nav-link text-danger" to="/reserv">Reservation</Link > 
              </NavItem>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
