import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      from(formatString: "MMMM Do, YYYY")
      to(formatString: "MMMM Do, YYYY")
      description
      role
      body {
        json
      }
    }
  }
`

const project = props => {
  const {
    title,
    from,
    to,
    role,
    description,
    body,
  } = props.data.contentfulProject
  console.log(props.data)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const altText = node.data.target.fields.title["en-US"]
        const imgUrl = node.data.target.fields.file["en-US"].url

        return <img alt={altText} src={imgUrl} />
      },
    },
  }

  return (
    <Layout>
      <h1>{title}</h1>
      <p>From: {from}</p>
      <p>To: {to}</p>
      <p>Role: {role}</p>
      <p>{description}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default project
