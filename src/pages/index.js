import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Bio from "../components/Bio"
import Article from "../components/Article"
import Seo from "../components/Seo"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.edges

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      {/* <Bio /> */}
      <ol style={{ listStyle: `none` }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const { date, description, tags, categories } = node.frontmatter

          return (
            <li key={node.fields.slug}>
              <div>
                  <Article 
                    slug={node.fields.slug}
                    title={title}
                    date={date}
                    timeToRead={node.timeToRead}
                    description={description}
                    excerpt={node.excerpt}
                    tags={tags}
                    categories={categories}
                  />
              </div>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="JIKOID" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY년 MM월 DD일")
            title
            description
            categories
            tags
          }
          timeToRead
        }
      }
    }
  }
`
