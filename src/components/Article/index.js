import * as React from "react";
import { Link } from "gatsby"
import TagList from "../../components/TagList"

import * as styles from "./Article.module.scss"

const Article = ({ slug, title, date, timeToRead, description, excerpt, tags, categories }) => {
    const main_category = categories[0]
    const sub_category = categories[1]

    return (
        <article
            className={styles.post_list_item}
            itemScope
            itemType="http://schema.org/Article"
            >
            <header>
                {sub_category ? 
                    <div className={styles.article_categories}><span>{main_category}{" ﹥ "}{sub_category}</span></div>
                    :
                    <div className={styles.article_categories}><span>{main_category}</span></div>
                }
                <h2>
                    <Link to={slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                    </Link>
                </h2>
                <small>{date} · {timeToRead} min read </small>
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