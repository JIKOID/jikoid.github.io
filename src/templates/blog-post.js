import * as React from "react"
import { Link, graphql } from "gatsby"
import { author } from "../../blog-config"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Header from "../components/Post/Header"
import Footer from "../components/Post/Footer"
import TableOfContents from "../components/TableOfContents"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Header 
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          author={author}
          tags={post.frontmatter.tags} 
        />
        <TableOfContents toc={post.tableOfContents} />
        <section
          style={{ marginTop: `5rem`, marginBottom: `5rem` }}
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <Footer />
      </article>
      <nav className="blog-post-nav">
        <ul>
          <li className={previous ? "previous-link" : "empty-link"}>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <span className="previous-link"> &lt; 이전글 </span>
                <div className="previous-title">{previous.frontmatter.title}</div>
              </Link>
            )}
          </li>
          <li className={next ? "next-link" : "empty-link"}>
            {next && (
              <Link to={next.fields.slug} rel="next">
                <span className="next-link"> 다음글 &gt; </span>
                <div className="next-title">{next.frontmatter.title}</div>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        description
        tags
      }
      tableOfContents
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
