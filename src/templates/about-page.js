import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({
  title,
  image,
  content,
  contentComponent
}) => {
  console.log("IMAGE: ", image)
  console.log("TITLE: ", title)
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
            boxShadow:
              'rgba(0, 73, 131, 0.90) 0.5rem 0px 0px, rgba(0, 73, 131, 0.90) -0.5rem 0px 0px',
            backgroundColor: 'rgba(0, 73, 131, 0.90)',
            backgroundPosition: `20% center`,
            backgroundAttachment: `fixed`,
            padding: '0.50em',
            // borderRadius: '0.2rem',
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
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.object,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  // const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        image={data.image}
        contentComponent={HTMLContent}
        title={data.title}
        content={data.markdownRemark.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  data: PropTypes.string.isRequired,
  // data: PropTypes.shape({
  //   markdownRemark: PropTypes.object,
  // }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
      }
    }
  }
`
