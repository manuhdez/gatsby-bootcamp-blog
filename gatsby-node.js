const path = require("path")

// Generate url slug from file node
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({ node, name: "slug", value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // 1. get path to template
  const blogTemplate = path.resolve("./src/templates/blog.jsx")

  // 2. get md data
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // 3. create new pages
  response.data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.fields

    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: { slug },
    })
  })
}
