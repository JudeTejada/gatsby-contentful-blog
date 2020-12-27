const path = require("path")


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTempalte = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
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

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTempalte,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  // 1. Get path to template
  // 2. Get markdown data
  // 3. Create new Pages
}
