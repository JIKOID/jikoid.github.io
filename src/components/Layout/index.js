import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"

import * as styles from "./Layout.module.scss"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  
  return (
    <div className={styles.global_wrapper} data-is-root-path={isRootPath}>
      <Header location={location} title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;
