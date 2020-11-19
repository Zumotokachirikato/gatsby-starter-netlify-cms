import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/pvp_logo1.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '40px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/show">
                Productions
              </Link>
              <Link className="navbar-item" to="/backstage">
                Backstage
              </Link>
              <Link className="navbar-item" to="/casting-calls">
              Casting Calls
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              {/*<Link className="navbar-item" to="/blog">
                Blog
              </Link>*/}
              <Link className="navbar-item" to="/contact">
                Support Us
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Contact
              </Link>
              <a className="navbar-item" id="tickets-navlink" href="https://app.arts-people.com/index.php?ticketing=pvp">
                Tickets
              </a>
              <a className="navbar-item" id="tickets-navlink" href="https://app.arts-people.com/index.php?ticketing=pvp">
                Donate
              </a>
            </div>
            <div className="navbar-end has-text-centered">
              {/*<a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>*/}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
