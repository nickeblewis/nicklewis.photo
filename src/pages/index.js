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
  console.log('dataaaaaaaaaaaa', data)
  const home = data.contentfulHome
  const galleries = data.allContentfulGallery.edges
  const products = data.allSanityGallery.edges
  return (
    <Layout location={location}>
      <SEO />
      <WrapperGrid>
        <PortfolioHero image={home.heroImage} />
        <PortfolioBody>
          <PortfolioBodyTop body={home.body} />
          <PortfolioBodyBottom>
            {galleries.map(({ node: gallery }) => (
              <PortfolioList
                key={gallery.id}
                slug={gallery.slug}
                image={gallery.heroImage}
                title={gallery.title}
                date={gallery.publishDate}
                excerpt={gallery.body}
              />
              
            ))}
            {products.map(({ node: prod }) => (
              <ProductList
                key={prod.id}
                id={prod.id}
                slug={prod.slug.current}
                image={prod.images}
                title={prod.title}
                date={prod._createdAt}
                excerpt={prod.blurb}
              />
              
            ))}
            <a href="#" className='snipcart-add-item' data-item-id='1' data-item-price='45' data-item-image='o.jpg' data-item-name='test' data-item-description='blah blah' data-item-url='http://snipcart-gatsby.netlify.com'>Click here!!!!!!!!!!</a>
          </PortfolioBodyBottom>
        </PortfolioBody>
      </WrapperGrid>
    </Layout>
  )
}

export const query = graphql`
  query {
    allSanityGallery {
    edges {
      node {
        id
        title
        _createdAt
        _rawBody
        blurb {
          en
        }
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
