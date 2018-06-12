import React from 'react'
import Link from 'gatsby-link'

import instagram from '../img/instagram-icon.svg'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="rickypedia.life" style={{ width: '198px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://www.instagram.com/rickypedia.life/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={instagram} alt="Instagram" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
