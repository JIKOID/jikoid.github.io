import * as React from "react";
import { Link } from "gatsby"
import TagList from "../../components/TagList"

import * as styles from "./Article.module.scss"

const Article = ({ slug, title, date, timeToRead, description, excerpt, tags }) => {
    return (
        <article
            className={styles.post_list_item}
            itemScope
            itemType="http://schema.org/Article"
            >
        <header>
            <h2>
                <Link to={slug} itemProp="url">
                <span itemProp="headline">{title}</span>
                </Link>
            </h2>
            <small>{date} · {timeToRead} min read</small>
        </header>

        <section>
            <p
            dangerouslySetInnerHTML={{
                __html: description || excerpt,
            }}
            itemProp="description"
            />
        </section>

        <TagList tags={tags}/>
        </article>
    )
}

export default Article;