import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import "./Categories.scss"

const Categories = ({ location }) => {
    const data = useStaticQuery(graphql`
        query CategoryQuery {
        categories: allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___categories) {
            fieldValue
            totalCount
            }
        }
        }
    `)

    const categoriesGroup = data.categories.group
    const categories = []
    let AllPostsCount = 0

    categoriesGroup.reduce((categoryMap, group) => {
        const { fieldValue, totalCount } = group

        AllPostsCount += totalCount
        
        fieldValue.split('/').reduce((mainCategory, subCategory, index, arr) => {
            mainCategory += `${index === 0 ? '' : '/'}${subCategory}`
            categoryMap.set(mainCategory, (categoryMap.get(mainCategory) || 0) + totalCount)
            return mainCategory;
        }, '')

        return categoryMap;
    }, new Map())
    .forEach((count, category) => categories.push({
        slug: category,
        category: category.split('/').pop(),
        count,
        depth: category.split('/').length - 1
    }))

    const slug = location.pathname.slice(1);
    const currentCategory = categories.reduce((current, next) => {
        if (~slug.indexOf(next.slug)) return next.slug;
        return current;
    }, '')

    return (

    <nav className="nav" role="navigation">
        <ol className="nav_links">
            <li>
                <Link to="/"><b>All Posts</b> <small>({AllPostsCount})</small></Link>
            </li>
            {categories.map(({ slug, category, count, depth }) => (
                <li
                    className={`nav_link ${depth ? "sub" : ''} ${currentCategory === slug ? "current" : ''}`}
                    key={category}
                >
                    <Link to={`/${slug}`}>
                        {category} <small>({count})</small>
                    </Link>
                </li>
            ))}
            
        </ol>
    </nav >
    )
}

export default Categories