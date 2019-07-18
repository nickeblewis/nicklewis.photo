import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

export default ({ node }) => {
  const sanityConfig = {projectId: '85cmsqr4', dataset: 'production'}

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 675 },
    sanityConfig
  )
  return (
    <figure>
      <Img fluid={fluidProps} alt={node.alt} />
      <caption>{node.caption}</caption>
    </figure>
  )
}
