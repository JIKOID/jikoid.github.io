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

const BlogPostTemplate = ({data, location, pageContext}) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext

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
    $slug: String!
  ) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
  }
`
