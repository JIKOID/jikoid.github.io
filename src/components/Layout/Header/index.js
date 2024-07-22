import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

import * as styles from "../Layout.module.scss"

export default function Header({ location, title }) {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header

    if (isRootPath) {
        header = (
        <h1 className={styles.main_heading}>
            <Link to="/">{title}</Link>
        </h1>
        )
    } else {
        header = (
        <h1 className={styles.header_link_home}>
            <Link to="/">{title}</Link>
        </h1>
        )
    }

    return (
        <header className={styles.global_header}>
            <title>{title}</title>

            <Helmet>
                {/* Google Search Console */}
                <meta name="google-site-verification" content="bYwWlKrL-ExMKgQ4rtapH7RM8CwPSBMmKpfMxjpTwcM" />
                {/* Naver Web Master */}
                <meta name="naver-site-verification" content="ffae897975016f2b8829e0672767e6e41a4c2bd7" />
            </Helmet>
            
            {header}
        </header>
    )
}