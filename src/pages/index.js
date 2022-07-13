import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Jonathan Martinez // Front-End Engineer</title>
      <link rel="canonical" href="https://jonathanmartinez.io" />
      <meta
        name="description"
        content="Hi! I'm Jonathan Martinez, a Front-End Engineer based in the Greater Los Angeles area."
      />
    </Helmet>
  </Layout>
)

export default IndexPage
