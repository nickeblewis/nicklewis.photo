import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WrapperGrid from '../components/WrapperGrid'
import BlogHero from '../components/Blog/BlogHero'
import BlogBody from '../components/Blog/BlogBody'
import BlogList from '../components/Blog/BlogList'
//import SEO from '../components/SEO'

export const query = graphql`

  query ArchivePageQuery {
    posts: allSanityPost(limit: 12, sort: {fields: [publishedAt], order: DESC}) {
      edges {
        node {
          id
          publishedAt
          mainImage {
              alt
              caption
              asset {
                  _ref
              }
          }
          title
          _rawBlurb
          slug {
            current
          }
        }
      }
    }
  }
`
const BlogIndexPage = ({ data, location }) => {
  // const posts = data.allContentfulPost.edges
  const blogPosts = data.posts.edges
  //const blog = data.contentfulBlog

  return (
    <Layout location={location}>
      <WrapperGrid>
        {/*<BlogHero image={blog.heroImage} />*/}
        <BlogBody>
          
          {blogPosts.map(({ node: post }) => (
            <BlogList
              key={post.id}
              slug={post.slug.current}
              image={post.mainImage}
              title={post.title}
              date={post.publishedAt}
              time={5}
              excerpt={post._rawBlurb}
            />
          ))}
        </BlogBody>
      </WrapperGrid>
    </Layout>
  )
}



export default BlogIndexPage