import * as React from "react"
import "../Post.scss"

const Content = ({ post }) => {
    return (
        <div className="content">
            <section
            style={{ marginTop: `5rem`, marginBottom: `5rem` }}
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            />
        </div>
    )
}

export default Content;