import * as React from "react"
import { Link } from "gatsby"

import "../Post.scss"

const Navigation = ({ previous, next }) => {
    return (
        <nav className="post_nav">
          <ul>
            <li className={previous ? "previous_link" : "empty_link"}>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <span className="previous_nav"> &lt; 이전글 </span>
                  <div className="previous_title">{previous.frontmatter.title}</div>
                </Link>
              )}
            </li>
            <li className={next ? "next_link" : "empty_link"}>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <span className="next_nav"> 다음글 &gt; </span>
                  <div className="next_title">{next.frontmatter.title}</div>
                </Link>
              )}
            </li>
          </ul>
        </nav>
    )
}

export default Navigation;