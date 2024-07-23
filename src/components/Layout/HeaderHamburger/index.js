import React, { useCallback, useRef } from "react"

import "./HeaderHamburger.module.scss"

const NavToggle = () => {
  const buttonRef = React.useRef();

  const handleToggle = React.useCallback(() => {
    buttonRef.current.classList.toggle('active');
  }, [buttonRef])

  return (
    <button
      className="nav-toggle"
      ref={buttonRef}
      onClick={handleToggle}
      aria-label="nav-toggle"
    />
  )
}

export default NavToggle;