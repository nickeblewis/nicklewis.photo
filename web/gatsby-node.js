const path = require(`path`)
const { isFuture } = require('date-fns')
const { format } = require('date-fns')


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // const loadPosts = new Promise((resolve, reject) => {

  //     {
  // export function createPagesulPost {
  //         edges {
  //           node {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     result.data.allContentfulPost.edges.map(({ node }) => {
  //       createPage({
  //         path: `blog/${node.slug}/`,
  //         component: path.resolve(`./src/templates/post.js`),
  //         context: {
  //           slug: node.slug,
  //         },
  //       })
  //     })
  //     resolve()
  //   })
  // })

  

  const loadProducts = new Promise((resolve, reject) => {
    graphql(`
      {
        allSanityGallery {
          edges {
            node {
              id
              slug {
                current
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allSanityGallery.edges.map(({ node }) => {        
        createPage({
          path: `/${node.slug.current}/`,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            id: node.id,
          },
        })
      })
      resolve()
    })
  })

   const loadGalleries = new Promise((resolve, reject) => {
     graphql(`
       {
         allContentfulGallery {
           edges {
             node {
               slug
             }
           }
         }
       }
     `).then(result => {
       result.data.allContentfulGallery.edges.map(({ node }) => {
         createPage({
           path: `${node.slug}/`,
           component: path.resolve(`./src/templates/gallery.js`),
           context: {
             slug: node.slug,
           },
         })
       })
       resolve()
     })
   })

  // const loadTags = new Promise((resolve, reject) => {
  //   graphql(`
  //     {
  //       allContentfulTag {
  //         edges {
  //           node {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     result.data.allContentfulTag.edges.map(({ node }) => {
  //       createPage({
  //         path: `tag/${node.slug}/`,
  //         component: path.resolve(`./src/templates/tag.js`),
  //         context: {
  //           slug: node.slug,
  //         },
  //       })
  //     })
  //     resolve()
  //   })
  // })

  return Promise.all([loadProducts, loadGalleries])
}