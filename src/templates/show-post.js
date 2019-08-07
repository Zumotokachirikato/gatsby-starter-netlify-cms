import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ShowPostTemplate = ({
  image,
  content,
  contentComponent,
  description,
  title,
  date1,
  helmet,
}) => {
  date2 = date2 || '';
  image = image || {};
  const PostContent = contentComponent || Content
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <h2 className="has-text-weight-bold is-bold-light">
            {
              date1 && date2 && date1 !== date2 ? [date1, " - ", date2] : date1
            }

            </h2>
            <p>{description}</p>
            <PostContent content={content} />
            <br />
            <a
              className="button tickets-btn" href="https://app.arts-people.com/index.php?ticketing=pvp"
              style={{marginLeft: 10 + 'px'}}
            >
            Buy Tickets
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

ShowPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date1: PropTypes.string,
  date2: PropTypes.string,
  helmet: PropTypes.object,
}

const ShowPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ShowPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Show">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        date1={post.frontmatter.date1}
        date2={post.frontmatter.date2 || ''}
      />
    </Layout>
  )
}

ShowPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ShowPost

export const pageQuery = graphql`
  query ShowPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date1(formatString: "MMMM D")
        date2(formatString: "MMMM D")
        starttime
        endtime
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`
