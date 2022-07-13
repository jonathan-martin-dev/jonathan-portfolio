import * as React from "react"
import PropTypes from "prop-types"
import Hero from "./Hero"
import AboutMe from "./AboutMe"
import WorkHistory from "./WorkHistory"
import Technologies from "./Technologies"
import Footer from "./Footer"
import "./layout.css"

const Layout = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <WorkHistory />
      <Technologies />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
