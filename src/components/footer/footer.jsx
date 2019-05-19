import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import scss from "./footer.module.scss"

const footer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <footer className={scss.footer}>
      <p>Createdy by {author} with gatsbyjs - © 2019</p>
    </footer>
  )
}

export default footer
