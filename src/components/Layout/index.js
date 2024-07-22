import * as React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import * as styles from "./Layout.module.scss"

import Headroom from "headroom.js"
import HeaderHambuger from "./HeaderHamburger"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const headerRef = React.useRef();

  React.useEffect(() => {
    const headerElement = headerRef.current;

    if (headerElement) {
      try {
        const headroom = new Headroom(headerElement);
        headerElement.init();

        // Log success message
        console.log('Headroom initialized successfully on:', headerElement);
      } catch (error) {
        // Catch and log any errors during initialization
        console.error('Failed to initialize Headroom:', error);
      }
    } else {
      // Log if the header element is not found
      console.error('Header element not found');
    }
  }, []);
  
  return (
    <>
      <Header ref={headerRef} location={location} title={title} />
        <HeaderHambuger />

        <div className={styles.container}>
          {/* Sidebar */}
          <Sidebar location={location} />

          {/* Contents */}
          <div className={styles.content_wrapper} data-is-root-path={isRootPath}>
            <main >{children}</main>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Layout;
