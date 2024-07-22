import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Article from "../components/Article"

const CategoryTemplate = ({ data, location, pageContext }) => {
    const title = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const category = pageContext.category.slice(2, -1)

    return (
        <Layout location={location} title={title}>
            <div>
                {posts.map(({ node }) => {
                    const { title, date, description, tags, categories } = node.frontmatter
                    const { slug } = node.fields
                    const { excerpt } = node.excerpt
                    const { timeToRead } = node.timeToRead

                    return (
                        <div>
                            <Article 
                                slug={slug}
                                title={title}
                                date={date}
                                timeToRead={timeToRead}
                                description={description}
                                excerpt={excerpt}
                                tags={tags}
                                categories={categories}
                            />
                        </div>
                    )
                })}
                <Link to="/">All categories</Link>
            </div>
        </Layout>
    )
}

export default CategoryTemplate;

export const Head = ({ pageContext }) => {
    const category = pageContext.category.slice(2, -1)

    return (
        <Seo title={category} />
    )
}

export const pageQuery = graphql`
    query Category($category: String!) {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { categories: { regex: $category } } }
        ) {
            totalCount
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

