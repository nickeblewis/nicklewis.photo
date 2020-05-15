import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

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
      height: 100% !important;
      object-fit: cover !important;
    }
  }
`
const BlogHero = props => {
  const sanityConfig = {projectId: '85cmsqr4', dataset: 'production'}

  const fluidProps = getFluidGatsbyImage(
    props.image.asset._id,
    { maxWidth: 675 },
    sanityConfig
  )
  return (
    <Wrapper>
      <Hero>
        <Img fluid={fluidProps} />
      </Hero>
    </Wrapper>
  )
}

export default BlogHero
