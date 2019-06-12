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
    images,
  } = data.sanityPost
  const postNode = data.sanityPost

  const postIndex = find(
    data.allSanityPost.edges,
    ({ node: post }) => post.id === id
  )

  console.log('rabbit', data.sanityPost)

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
        
        <PostArticle
          body={_rawBody}
          previous={postIndex.previous}
          next={postIndex.next}
        />
      </WrapperPost>
      {images && (
        <WrapperGallery>
          <GalleryComposition source="sanity" photos={images} />
        </WrapperGallery>
      )}
      
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
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
          fluid {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
        }
        alt
      }
        
        
      
      
      slug {
        current
      }
      
      _rawBody
      _createdAt
      images {
            asset {
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
          }
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