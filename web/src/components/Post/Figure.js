import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage, getFixedGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

export default ({ node }) => {
  const sanityConfig = {projectId: '85cmsqr4', dataset: 'production'}

  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
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
