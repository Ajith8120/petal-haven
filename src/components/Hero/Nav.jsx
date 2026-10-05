import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'
import logo from '../../assets/Logo_main.png'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg site-nav" aria-label="Main navigation">
        <Link className="site-logo" to="/" onClick={closeMenu} aria-label="Petal Haven home">
          <img src={logo} alt="Petal Haven" />
        </Link>

        <button
          className={`navbar-toggler site-nav-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="site-nav-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="site-nav-menu" className={`collapse navbar-collapse site-nav-menu${menuOpen ? ' show is-open' : ''}`}>
          <div className="site-nav-links">
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
            <NavLink to="/Garlands" onClick={closeMenu}>Garlands</NavLink>
            <NavLink to="/Bouquets" onClick={closeMenu}>Bouquets</NavLink>
            <NavLink to="/About" onClick={closeMenu}>About</NavLink>
            <NavLink to="/Contact" onClick={closeMenu}>Contacts</NavLink>
          </div>
          <label className="site-nav-language" htmlFor="site-language">
            <span>Language</span>
            <select id="site-language" name="language" defaultValue="en" aria-label="Choose language">
              <option value="en">English</option>
              <option value="ta">தமிழ்</option>
            </select>
          </label>
        </div>
      </nav>
    </header>
  )
}

export default Nav
