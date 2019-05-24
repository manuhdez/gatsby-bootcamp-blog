import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"

const notFoundPage = () => {
  return (
    <Layout title="Page not Found">
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go home</Link>
      </p>
    </Layout>
  )
}

export default notFoundPage
