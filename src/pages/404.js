import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const NotFoundPage = () => {
    return (
      <Layout>
        <div className="content">
          <h2
            className="has-text-weight-bold is-size-2"
            style={{
              backgroundPosition: `20% center`,
              backgroundAttachment: `fixed`,
              padding: '0.50em',
              color: 'white',
              padding: '3rem 1rem 0 1rem',
              textAlign: 'center',
              }}
            >
            NOT FOUND
          </h2>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section" style={{ textAlign: 'center' }}>
                  <h2 className="title is-size-4 has-text-weight-bold is-bold-light">
                    Sorry, you've encountered a dead end. The link you used is no
                    longer working on this site. Please use the navigation to find
                    what you are looking for, or Contact Us if you have any issues.
                  </h2>
                  <br />
                  <Link to="/">
                    Return Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </Layout>
    )
}

export default NotFoundPage
