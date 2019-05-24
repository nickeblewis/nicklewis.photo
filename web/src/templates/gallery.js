import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import WrapperGallery from '../components/Gallery/WrapperGallery'
import GalleryComposition from '../components/Gallery/GalleryComposition'
import GalleryHead from '../components/Gallery/GalleryHead'
//import SEO from '../components/SEO'

const GalleryTemplate = ({ data, location }) => {
  const { title, slug, tags, images } = data.contentfulGallery
  const galleryNode = data.contentfulGallery
  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      
      <GalleryHead title={title} tags={tags} />
      <WrapperGallery>
        <GalleryComposition photos={images} />
      </WrapperGallery>
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     contentfulGallery(slug: { eq: $slug }) {
//       title
//       id
//       slug
//       publishDate(formatString: "MMMM DD, YYYY")
//       publishDateISO: publishDate(formatString: "YYYY-MM-DD")
//       heroImage {
//         ogimg: resize(width: 900) {
//           src
//           width
//           height
//         }
//       }
//       tags {
//         title
//         id
//         slug
//       }
//       images {
//         title
//         file {
//           url
//         }
//         fluid(maxWidth: 1000) {
//           ...GatsbyContentfulFluid_withWebp
//         }
//       }
//     }
//   }
// `
export default GalleryTemplate