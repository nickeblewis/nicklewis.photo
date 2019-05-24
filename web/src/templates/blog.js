import React from 'react'
import { graphql } from 'gatsby'
import find from 'lodash/find'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import WrapperGallery from '../components/Gallery/WrapperGallery'
import GalleryComposition from '../components/Gallery/GalleryComposition'
import WrapperPost from '../components/Post/WrapperPost'
import PostHead from '../components/Post/PostHead'
import PostHero from '../components/Post/PostHero'
import PostArticle from '../components/Post/PostArticle'
// import SEO from '../components/SEO'

const BlogTemplate = ({ data, location }) => {
  const {
    title,
    slug,
    id,
    heroImage,
    _rawBody,
    _createdAt,
    tags,
    gallery,
  } = data.sanityPost
  const postNode = data.sanityPost

  const postIndex = find(
    data.allSanityPost.edges,
    ({ node: post }) => post.id === id
  )

  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <PostHead
        title={title}
        date={_createdAt}
        tags={["tags"]}
        time={5}
      /> 
      <WrapperPost>
        {/* <PostHero image={heroImage} /> */}
        <PostArticle
          body={_rawBody}
          previous={postIndex.previous}
          next={postIndex.next}
        />
      </WrapperPost>
      {/*<WrapperGallery>
        <GalleryComposition photos={gallery} />
      </WrapperGallery>*/}
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityPost(id: { eq: $id }) {
      title
      id
      
      categories {
        _id
        title
      }
      

      slug {
        current
      }
      
      _rawBody
      _createdAt
      
    }
    allSanityPost(limit: 1000, sort: { fields: [_createdAt], order: DESC }) {
      edges {
        node {
          id
        }
        previous {
          slug {
            current
          }
        }
        next {
          slug {
            current
          }
        }
      }
    }
  }
`

export default BlogTemplate
