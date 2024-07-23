import * as React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import * as styles from "./Layout.module.scss"

const Layout = ({ location, title, children }) => {
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
        </div>
        <Footer />
    </div>
  )
}

export default Layout;
