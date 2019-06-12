import React from 'react'
import styled from 'react-emotion'
import Img from 'gatsby-image'
import { getFluidGatsbyImage, getFixedGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: block;
    grid-area: Left;
    width: 100%;
  }
`

const Hero = styled.div`
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
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
      height: 100% !important;
      object-fit: cover !important;
    }
  }
`

const PortfolioHero = props => {
  const fluidProps = getFluidGatsbyImage(
    props.image,
    { maxWidth: 675 },
    ...clientConfig.sanity
  )
  return (
    <Wrapper>
      <Hero>
        <Img fluid={fluidProps} />
      </Hero>
    </Wrapper>
  )
}

export default PortfolioHero
