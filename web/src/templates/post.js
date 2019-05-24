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
//import SEO from '../components/SEO'

const PostTemplate = ({ data, location }) => {
  const {
    title,
    slug,
    id,
    heroImage,
    body,
    publishDate,
    tags,
    gallery,
  } = data.contentfulPost
  const postNode = data.contentfulPost

  const postIndex = find(
    data.allContentfulPost.edges,
    ({ node: post }) => post.id === id
  )

  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <PostHead
        title={title}
        date={publishDate}
        tags={tags}
        time={body.childMarkdownRemark.timeToRead}
      />
      <WrapperPost>
        <PostHero image={heroImage} />
        <PostArticle
          body={body}
          previous={postIndex.previous}
          next={postIndex.next}
        />
      </WrapperPost>
      <WrapperGallery>
        <GalleryComposition photos={gallery} />
      </WrapperGallery>
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     contentfulPost(slug: { eq: $slug }) {
//       title
//       id
//       slug
//       publishDate(formatString: "DD MMM YYYY")
//       publishDateISO: publishDate(formatString: "YYYY-MM-DD")
//       tags {
//         title
//         id
//         slug
//       }
//       gallery {
//         title
//         fluid(maxWidth: 1000) {
//           ...GatsbyContentfulFluid_withWebp
//         }
//       }
//       heroImage {
//         title
//         fluid(maxWidth: 1000) {
//           ...GatsbyContentfulFluid_withWebp
//         }
//         ogimg: resize(width: 900) {
//           src
//           width
//           height
//         }
//       }
//       body {
//         childMarkdownRemark {
//           html
//           excerpt(pruneLength: 320)
//           timeToRead
//         }
//       }
//     }
//     allContentfulPost(
//       limit: 1000
//       sort: { fields: [publishDate], order: DESC }
//     ) {
//       edges {
//         node {
//           id
//         }
//         previous {
//           slug
//         }
//         next {
//           slug
//         }
//       }
//     }
//   }
// `

export default PostTemplate
