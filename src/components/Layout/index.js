import * as React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import TableOfContents from "../TableOfContents"

import * as styles from "./Layout.module.scss"

const Layout = ({ location, title, children, toc }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  
  return (
    <div id="wrap">
      <Header location={location} title={title} />
        <div className={styles.container}>
          {/* Sidebar */}
          <Sidebar location={location} />

          {/* Contents */}
          <div className={styles.content_wrapper} data-is-root-path={isRootPath}>
            <main >{children}</main>
          </div>
          {
            toc ? 
              <div className={styles.right_sidebar}>
                <TableOfContents toc={toc} />
              </div>
            :
              null
          }
        </div>
        <Footer />
    </div>
  )
}

export default Layout;
