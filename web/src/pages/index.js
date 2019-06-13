import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WrapperGrid from '../components/WrapperGrid'
import PortfolioHero from '../components/Portfolio/PortfolioHero'
import PortfolioBody from '../components/Portfolio/PortfolioBody'
import PortfolioBodyTop from '../components/Portfolio/PortfolioBodyTop'
import PortfolioBodyBottom from '../components/Portfolio/PortfolioBodyBottom'
import PortfolioList from '../components/Portfolio/PortfolioList'
import ProductList from '../components/Product/ProductList'

import SEO from '../components/SEO'
console.log(
  `______________________________________
|                                                           |
|                        Built by                      |
|                Nick Lewis                |
|                                                           |
|        (•_•) ( •_•)>⌐■-■ (⌐■_■)        |
|                                                           |
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                    (\\__/)  ||
                    (•ㅅ•) ||
                    / 　 づ`
)
const Index = ({ data, location }) => {
  //const home = data.contentfulHome
  const galleries = data.allContentfulGallery.edges
  const products = data.allSanityGallery.edges
  const site = data.site
  
  return (
    <Layout location={location}>
      <SEO />
      <WrapperGrid>
        <PortfolioHero image={products[0].node.heroImage.asset} />
        <PortfolioBody>
          <PortfolioBodyTop body={site.homeIntro} />
          <PortfolioBodyBottom>
            {products.map(({ node: prod }) => (
              <ProductList
                key={prod.id}
                id={prod.id}
                slug={prod.slug.current}
                image={prod.heroImage}
                title={prod.title}
                date={prod._createdAt}
                excerpt={prod.blurb}
              />
            ))}
           
          </PortfolioBodyBottom>
        </PortfolioBody>
      </WrapperGrid>
    </Layout>
  )
}

export const query = graphql`
  query {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
      homeIntro
    }
    allSanityGallery(
      sort: { fields: [_createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          _createdAt
          blurb
          _rawBody
          slug {
            current
          }
          heroImage {
            asset {
              _id
              _ref
              id
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
    }
    allContentfulGallery(
      filter: { public: { ne: false } }
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "DD MMM YYYY")
          heroImage {
            title
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 240)
            }
          }
        }
      }
    }
    contentfulHome {
      title
      id
      heroImage {
        title
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Index
