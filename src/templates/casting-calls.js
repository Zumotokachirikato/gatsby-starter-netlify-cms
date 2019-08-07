import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const CastingCallPageTemplate = ({
  title,
  image,
  signuplink,
  content,
  contentComponent,
}) => {
  image = image || {}
  const PageContent = contentComponent || Content

  return (
    <div className="content">
      <div
        className="full-width-image-container-2 margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <h2
          className="has-text-weight-bold is-size-1 title-h2"
          style={{
            // boxShadow:
              // 'rgba(0, 73, 131, 0.90) 0.5rem 0px 0px, rgba(0, 73, 131, 0.90) -0.5rem 0px 0px',
            backgroundColor: 'rgba(0, 73, 131, 0.70)',
            backgroundPosition: `20% center`,
            backgroundAttachment: `fixed`,
            padding: '0.50em',
            color: 'white',
            padding: '1rem',
          }}
        >
          {title}
        </h2>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
                <a className="button tickets-btn" href={signuplink} target="_blank" style={{marginLeft: 0 + 'px'}}>
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

CastingCallPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  signuplink:PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CastingCallPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CastingCallPageTemplate
        image={post.frontmatter.image || {}}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        signuplink={post.frontmatter.signuplink}
        content={post.html}
      />
    </Layout>
  )
}

CastingCallPage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  signuplink: PropTypes.string,
  content: PropTypes.func,
  contentComponent: PropTypes.object,
}

export default CastingCallPage

export const castingCallPageQuery = graphql`
  query CastingCallPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        signuplink
      }
    }
  }
`
