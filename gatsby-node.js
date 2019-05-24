const path = require("path")

// ********************************
// Generate url slug from file node
// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({ node, name: "slug", value: slug })
//   }
// }

// *******************************
// Markdown version of createPages
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   // 1. get path to template
//   const blogTemplate = path.resolve("./src/templates/blog.jsx")

//   // 2. get md data
//   const response = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   // 3. create new pages
//   response.data.allMarkdownRemark.edges.forEach(edge => {
//     const { slug } = edge.node.fields

//     createPage({
//       component: blogTemplate,
//       path: `/blog/${slug}`,
//       context: { slug },
//     })
//   })
// }

// *************************
// Contentful version
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // 1. get path to template
  const blogTemplate = path.resolve("./src/templates/blog.jsx")
  const projectTemplate = path.resolve("./src/templates/project.jsx")

  // 2. get md data
  const blogResponse = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const projectResponse = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // 3. create new pages
  blogResponse.data.allContentfulBlogPost.edges.forEach(edge => {
    const { slug } = edge.node

    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: { slug },
    })
  })

  projectResponse.data.allContentfulProject.edges.forEach(edge => {
    const { slug } = edge.node

    createPage({
      component: projectTemplate,
      path: `/projects/${slug}`,
      context: { slug },
    })
  })
}
