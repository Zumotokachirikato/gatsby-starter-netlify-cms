import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import ShowRoll from '../components/ShowRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  address,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1.5',
          justifyContent: 'space-evenly',
          alignItems: 'left',
          flexDirection: 'column',
          // boxShadow:
          //   'black 0.5rem -2px -2px',
          backgroundColor: 'rgba(0, 73, 131, 0.70)',
          // borderRadius: '0.2rem',
          padding: '0.50em',
          textShadow: '0.1rem 0px 0px black',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-4-touch is-size-3-tablet is-size-2-widescreen"
          style={{
            // boxShadow:
            //   'rgba(0, 73, 131, 0.80) 0.5rem 0px 0px, rgba(0, 73, 131, 0.80) -0.5rem 0px 0px',
            // backgroundColor: 'rgba(0, 73, 131, 0.80)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-touch is-size-4-tablet is-size-4-widescreen"
          style={{
            // boxShadow:
            //   'rgba(0, 73, 131, 0.80) 0.5rem 0px 0px, rgba(0, 73, 131, 0.80) -0.5rem 0px 0px',
            // backgroundColor: 'rgba(0, 73, 131, 0.80)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
          <br />
          {address}
        </h3>
        {/*<h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            // boxShadow:
            //   'rgba(0, 73, 131, 0.80) 0.5rem 0px 0px, rgba(0, 73, 131, 0.80) -0.5rem 0px 0px',
            // backgroundColor: 'rgba(0, 73, 131, 0.80)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {address}
        </h3>*/}
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                {/*<div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>*/}
                {/*<div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2 is-$white">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>*/}
                {/*<Features gridItems={intro.blurbs} />*/}
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Upcoming Shows
                  </h3>
                  <ShowRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/show">
                      See All Shows
                    </Link>
                  </div>
                </div>
                {/*<div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />*/}
                {/*<div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Upcoming Shows
                  </h3>
                  <ShowRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  address: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        address={frontmatter.address}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        address
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
