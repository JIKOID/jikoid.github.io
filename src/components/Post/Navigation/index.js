import * as React from "react"
import { Link } from "gatsby"

import * as styles from "../Post.module.scss"

const Navigation = ({ previous, next }) => {
    return (
        <nav className={styles.post_nav}>
          <ul>
            <li className={previous ? styles.previous_link : styles.empty_link}>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <span className={styles.previous_nav}> &lt; 이전글 </span>
                  <div className={styles.previous_title}>{previous.frontmatter.title}</div>
                </Link>
              )}
            </li>
            <li className={next ? styles.next_link : styles.empty_link}>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <span className={styles.next_nav}> 다음글 &gt; </span>
                  <div className={styles.next_title}>{next.frontmatter.title}</div>
                </Link>
              )}
            </li>
          </ul>
        </nav>
    )
}

export default Navigation;