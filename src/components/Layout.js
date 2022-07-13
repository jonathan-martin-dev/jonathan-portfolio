/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
