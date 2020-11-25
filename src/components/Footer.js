import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/pvp_logo1.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/show">
                        Productions
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/backstage">
                        Backstage
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/casting-calls">
                        Casting Calls
                      </Link>                        
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Support Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Contact
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <a
                        id="tickets-navlink-footer"
                        href="https://app.arts-people.com/index.php?ticketing=pvp"
                      >
                        Tickets
                      </a>
                    </li>
                    <li className="navbar-item">
                      <a
                        id="donation-navlink-footer"
                        href="https://app.arts-people.com/index.php?donation=pvp"
                      >
                        Donate
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                  {/*<img
                  src={logo}
                  alt="platte valley players logo"
                  style={{ width: '5.5em', height: '6.5em' }}
                  />*/}
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <img
                      src={logo}
                      alt="platte valley players logo"
                      style={{ width: '7.5em' }}
                      />
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3 social">
                <br />
                <a
                  title="facebook"
                  target="_blank"
                  href="https://facebook.com"
                  rel="noopener noreferrer"
                  >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a
                  title="twitter"
                  target="_blank"
                  href="https://twitter.com"
                  rel="noopener noreferrer"
                  >
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a
                  title="instagram"
                  target="_blank"
                  href="https://instagram.com"
                  rel="noopener noreferrer"
                  >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
