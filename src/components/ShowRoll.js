import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ShowRoll extends React.Component {
  constructor() {
    super();

    this.formatDates = this.formatDates.bind(this);
  }


  // formatDates = date => {
  //   console.log("formatDate input value : ", date);
  //   let noZ = date.substring(0, date.length -1);
  //   console.log("Z removed : ", noZ);
  //   noZ.replace('-','/');
  //   console.log("- to / : ", noZ.replace('-','/'));
  //   let formatted = new Date(noZ);
  //   console.log("formatted : ", formatted);
  //   console.log("Parsed?? : ", Date.parse(formatted));
  //   return formatted;
  // }

  // formatDates = date => {
  //   let epoch = new Date(date)
  //
  //   let za = new Date(epoch),
  //       zaR = za.getUTCFullYear(),
  //       zaMth = za.getUTCMonth(),
  //       zaDs = za.getUTCDate(),
  //       zaTm = za.toTimeString().substr(0,5);
  //
  //   console.log(zaR +"-" + zaMth + "-" + zaDs, zaTm)
  // }

  formatDates = date => {
    // var date = '2014-01-02T00:00:00.000Z'
    let dateCpy = date;
    dateCpy = dateCpy.substring(0,10).split('-')
    dateCpy = dateCpy[1] + '-' + dateCpy[2] + '-' + dateCpy[0];
    let dateAdjust = new Date(date),
    dateAdjustR = dateAdjust.getUTCFullYear(),
    dateAdjustMth = dateAdjust.getUTCMonth(),
    dateAdjustDs = dateAdjust.getUTCDate(),
    dateAdjustHr = 24 - dateAdjust.toTimeString().substr(0,2),
    dateAdjustMn = dateAdjust.toTimeString().substr(2, 3);

    console.log("-----------------");
    console.log("HOUR: ", dateAdjustHr);
    console.log("stringggg   : ", dateAdjustR +"-" + dateAdjustMth + "-" + dateAdjustDs, dateAdjustHr + dateAdjustMn)
    console.log("FORMATTED DATE FN : ", dateCpy);
    console.log("-----------------");
  }

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
                          {/*{console.log("date         : ", post.frontmatter.date1.substring(0, post.frontmatter.date1.length -1))}
                          {console.log("date format  : ", this.formatDates(post.frontmatter.date1))}*/}
                          {(post.frontmatter.date1 && post.frontmatter.date2) &&
                            (post.frontmatter.date2.slice(0, post.frontmatter.date2.indexOf(","))
                              !== post.frontmatter.date1.slice(0, post.frontmatter.date1.indexOf(",")))
                            ? `${post.frontmatter.date1.slice(0, post.frontmatter.date1.indexOf(","))} - ${post.frontmatter.date2}`
                            // ? `${post.frontmatter.date1} - ${post.frontmatter.date2}`
                            : `${post.frontmatter.date1}`
                          }
                          <br />
                          <small>{post.frontmatter.starttime}</small>
                          <br />
                          <small>{post.frontmatter.endtime}</small>
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
                date1(formatString: "MMMM D, YYYY")
                date2(formatString: "MMMM D, YYYY")
                starttime
                endtime
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
