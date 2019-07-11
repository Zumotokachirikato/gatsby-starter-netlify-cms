import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ShowRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts
          .map(({ node: post }) => (
              <div className="is-parent column is-6" key={post.id}>
                <article
                  className={`blog-list-item tile is-child box notification ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${
                              post.title
                            }`,
                          }}
                        />
                      </div>
                    ) : null}
                    <p className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                      <br />
                      <span className="subtitle is-size-5 is-block">
                          {console.log("date1      : ", post.frontmatter.date1)}
                          {(post.frontmatter.date1 && post.frontmatter.date2) &&
                            (post.frontmatter.date2.slice(0, post.frontmatter.date2.indexOf(","))
                              !== post.frontmatter.date1.slice(0, post.frontmatter.date1.indexOf(",")))
                            ? `${post.frontmatter.date1.slice(0, post.frontmatter.date1.length - 14)} - ${post.frontmatter.date2.slice(0, post.frontmatter.date2.length)}`
                            // ? `${post.frontmatter.date1} - ${post.frontmatter.date2}`
                            : `${post.frontmatter.date1} - ${post.frontmatter.date2.slice(17, post.frontmatter.date2.length)}`
                          }
                      </span>
                    </p>
                  </header>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      More Info →
                    </Link>
                    <a className="button tickets-btn" href="https://app.arts-people.com/index.php?ticketing=pvp" style={{marginLeft: 10 + 'px'}}>
                      Tickets
                    </a>
                  </p>
                </article>
              </div>
            ))}

      </div>
    )
  }
}

ShowRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ShowRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date1] }
          filter: { frontmatter: { templateKey: { eq: "show-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date1(formatString: "MMMM DD, YYYY hh:mmA")
                date2(formatString: "MMMM DD, YYYY hh:mmA")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 480, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ShowRoll data={data} count={count} />}
  />
)
