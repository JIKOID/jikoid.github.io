import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Bio from "../components/Bio"
import Article from "../components/Article"
import Seo from "../components/Seo"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

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
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const { date, description, tags, categories } = post.frontmatter

          return (
            <li key={post.fields.slug}>
              <div>
                  <Article 
                    slug={post.fields.slug}
                    title={title}
                    date={date}
                    timeToRead={post.timeToRead}
                    description={description}
                    excerpt={post.excerpt}
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
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
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
`
