import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WrapperGrid from '../components/WrapperGrid'
import ProductHero from '../components/Product/ProductHero'
import ProductBody from '../components/Product/ProductBody'
import ProductList from '../components/Product/ProductList'
//import SEO from '../components/SEO'

const Shop = ({ data, location }) => {
  const products = data.allContentfulProduct.edges
  const shop = data.contentfulShop

  return (
    <Layout location={location}>
      
      <WrapperGrid>
        <ProductHero image={shop.heroImage} />
        <ProductBody>
          {products.map(({ node: product, i }) => (
            <ProductList
              key={i}
              sku={product.sku}
              image={product.image}
              title={product.title}
              date={product.publishDate}
              time={product.body.childMarkdownRemark.timeToRead}
              excerpt={product.body}
            />
            
          ))}
          </ProductBody>
      </WrapperGrid>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProduct(
      limit: 1000
      sort: { fields: [title], order: DESC }
    ) {
      edges {
        node {
          title
          sku
          image {
            title
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 240)
              timeToRead
            }
          }
        }
      }
    }
    contentfulShop {
      title
      heroImage {
        title
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default Shop
