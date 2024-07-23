import * as React from "react"
import * as styles from "../Post.module.scss"

import TagList from "../../TagList"


export default function Header({ title, date, author, tags, timeToRead, categories }) {
    const [mainCategory, subCategory] = categories.split('/')
    
    return (
        <header className={styles.post_header}>
          {subCategory ? 
            <div className={styles.article_categories}><span>{mainCategory}{" ﹥ "}{subCategory}</span></div>
            :
            <div className={styles.article_categories}><span>{mainCategory}</span></div>
          }
          <h1 itemProp="headline">{title}</h1>
          <b>@{author}</b> · {date} · {timeToRead} min read
          <TagList tags={tags} />
        </header>
    )
}