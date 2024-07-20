import * as React from "react"
import * as styles from "../Post.module.scss"

import TagList from "../../TagList"


export default function Header({ title, date, author, tags, timeToRead, categories }) {
    const main_category = categories[0]
    const sub_category = categories[1]
    
    return (
        <header className={styles.post_header}>
          {sub_category ? 
            <div className={styles.article_categories}><span>{main_category}{" ﹥ "}{sub_category}</span></div>
            :
            <div className={styles.article_categories}><span>{main_category}</span></div>
          }
          <h1 itemProp="headline">{title}</h1>
          <b>@{author}</b> · {date} · {timeToRead} min read
          <TagList tags={tags} />
        </header>
    )
}