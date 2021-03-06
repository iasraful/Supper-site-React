import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [click, setClick] = useState(false)

    const handelCLick = () => setClick(! click)

    const closeMobileMenu = () => setClick(false)
    return (
       <>
       <nav className="navbar">
           <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                  TRVL <i className="fab fa-typo3"></i></Link>
                  <div className="menu-icon" onClick ={handelCLick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars '}></i>
                  </div>
                  <ul className={ click ? "nav-menu active" : "nav-menu"}>
                      <li className="nav-item">
                          <Link to="/" onClick = {closeMobileMenu}>Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/services" onClick = {closeMobileMenu}>Services</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/products" onClick = {closeMobileMenu}>Products</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/sign-up" onClick = {closeMobileMenu}>Sign Up</Link>
                      </li>
                  </ul>
           </div>
       </nav>
       </>
    )
}
