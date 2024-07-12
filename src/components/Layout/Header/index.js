import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

export default function Header({ location, title }) {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header

    if (isRootPath) {
        header = (
        <h1 className="main-heading">
            <Link to="/">{title}</Link>
        </h1>
        )
    } else {
        header = (
        <Link className="header-link-home" to="/">{title}</Link>
        )
    }

    return (
        <header className="global-header">
            <title>{title}</title>

            <Helmet>
                {/* Google Search Console */}
                <meta name="google-site-verification" content="wWXWMf_EAndeNs5WcwgGfsTScgQfH2cu8Ozu6DuI3nQ" />
                {/* Naver Web Master */}
                <meta name="naver-site-verification" content="ffae897975016f2b8829e0672767e6e41a4c2bd7" />
            </Helmet>
            
            {header}
        </header>
    )
}