import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import scss from "./header.module.scss"

const header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <header className={scss.header}>
      <h1 className={scss.logo}>
        <Link to="/">{title}</Link>
      </h1>
      <nav>
        <ul className={scss.list}>
          <li>
            <Link className={scss.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={scss.link} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={scss.link} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={scss.link} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default header
