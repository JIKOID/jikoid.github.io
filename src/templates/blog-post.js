import * as React from "react"
import { graphql } from "gatsby"
import { author } from "../../blog-config"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Header from "../components/Post/Header"
import TableOfContents from "../components/TableOfContents"
import Content from "../components/Post/Content"
import Navigation from "../components/Post/Navigation"
import Footer from "../components/Post/Footer"
import Utterances from "../components/Utterances"

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
          timeToRead={post.timeToRead}
          categories={post.frontmatter.categories}
        />
        <TableOfContents toc={post.tableOfContents} />
        <Content post={post} />
        <Navigation previous={previous} next={next} />
        <Footer />
      </article>
      <Utterances />
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
        categories
      }
      tableOfContents
      timeToRead
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
