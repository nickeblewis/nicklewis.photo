import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import WrapperGallery from '../components/Gallery/WrapperGallery'
import GalleryComposition from '../components/Gallery/GalleryComposition'
import GalleryHead from '../components/Gallery/GalleryHead'
//import SEO from '../components/SEO'

const ProductTemplate = ({ data, location }) => {
  console.log('product template',data)
  const { title, slug, tags, defaultProductVariant } = data.sanityGallery
  const galleryNode = data.contentfulGallery
  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      
      <GalleryHead title={title} tags={['tags']} />
      <WrapperGallery>
        <GalleryComposition source="sanity" photos={defaultProductVariant.images} />
      </WrapperGallery>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityGallery(id: { eq: $id }) {
      title
      id
      slug {
        current
      }
      
      images {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
 
      
      }
    }

      }
    }
  
`
export default ProductTemplate