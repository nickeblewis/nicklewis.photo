import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 55em) {
    display: block;
    grid-area: Left;
    width: 100%;
  }
`

const Hero = styled.div`
  @media screen and (min-width: 55em) {
    grid-area: left;
    position: fixed !important;
    pointer-events: none;
    transition: opacity 0.3s, visibility 0.3s;
    width: calc(50% - 3rem);
    height: calc(100vh - 5.5rem);
    top: 3.5rem;
    left: 2rem;
    z-index: -99;
    div {
      height: 50% !important;
      object-fit: cover !important;
    }
  }
`
const ProductHero = props => {
  return (
    <Wrapper>
      <Hero>
        <Img fluid={props.image.fluid} />
      </Hero>
    </Wrapper>
  )
}

export default ProductHero
