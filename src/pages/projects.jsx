import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"

import scss from "./styles/blog.module.scss"

const projectsPage = () => {
  const projectsData = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: to, order: DESC }) {
        edges {
          node {
            title
            to(formatString: "MMMM Do, YYYY")
            slug
          }
        }
      }
    }
  `)

  const { edges } = projectsData.allContentfulProject

  return (
    <Layout title="My projects">
      <h1>Projects</h1>
      <ol className={scss.posts}>
        {edges.map(postData => {
          const { title, slug, to } = postData.node

          return (
            <li key={title + to} className={scss.post}>
              <Link to={`/projects/${slug}`}>
                <h2>{title}</h2>
                <p>{to}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default projectsPage
