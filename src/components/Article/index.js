import * as React from "react";
import { Link } from "gatsby"
import TagList from "../../components/TagList"
import parsedCategories from "../../utils/parsedCategories"

import { GoClock } from "react-icons/go";
import { IoFolderOpenOutline } from "react-icons/io5";

import "./Article.scss"


const Article = ({ slug, title, date, timeToRead, description, excerpt, tags, categories }) => {
    const [mainCategory, subCategory] = categories.split('/')

    const mainCategoryUrl = `/${mainCategory}` 
    const subCategoryUrl = `/${categories}`

    return (
        <article
            className="post_list_item"
            itemScope
            itemType="http://schema.org/Article"
            >
            <header>
                <div className="article_categories">
                {subCategory ? 
                    <span>
                        <Link to={mainCategoryUrl} itemProp="url">{parsedCategories(mainCategory)}</Link>
                        {" ﹥ "}
                        <Link to={subCategoryUrl} itemProp="url">{parsedCategories(subCategory)}</Link>
                    </span>
                :
                    <span>
                        <Link to={mainCategoryUrl}>{mainCategory}</Link>
                    </span>
                }
                </div>
                
                <h2>
                    <Link to={slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                    </Link>
                </h2>
                <div className="acticle_utils">
                    <IoFolderOpenOutline /> <span> {date}</span> · <GoClock /> <span>{timeToRead}분</span>
                </div>
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