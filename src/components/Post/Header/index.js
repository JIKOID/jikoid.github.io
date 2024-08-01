import * as React from "react"
import { Link } from "gatsby"
import TagList from "../../TagList"
import parsedCategories from "../../../utils/parsedCategories"
import * as styles from "../Post.module.scss"
import { GoClock } from "react-icons/go";
import { IoFolderOpenOutline } from "react-icons/io5";


export default function Header({ title, date, author, tags, timeToRead, categories }) {
    const [mainCategory, subCategory] = categories.split('/')

    const mainCategoryUrl = `/${mainCategory}`
    const subCategoryUrl = `/${categories}`
    
    return (
        <header className={styles.post_header}>
          {subCategory ? 
            <div className={styles.article_categories}>
                <span>
                  <Link to={mainCategoryUrl} itemProp="url">{parsedCategories(mainCategory)}</Link>
                  {" ﹥ "}
                  <Link to={subCategoryUrl} itemProp="url">{parsedCategories(subCategory)}</Link>
                </span>
            </div>
          :
            <div className={styles.article_categories}>
                <span>
                    <Link to={mainCategoryUrl}>{mainCategory}</Link>
                </span>
            </div>
          }
          <h1 itemProp="headline">{title}</h1>
          <div className={styles.post_utils}>
            <b>@{author}</b> · <IoFolderOpenOutline /> <span> {date}</span> · <GoClock /> <span>{timeToRead}분</span>
          </div>
          <TagList tags={tags} />
        </header>
    )
}