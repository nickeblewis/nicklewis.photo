import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Figure from './figure'
import Slideshow from './slideshow'

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>

        case 'h2':
          return <h2>{props.children}</h2>

        case 'h3':
          return <h3>{props.children}</h3>

        case 'h4':
          return <h4>{props.children}</h4>

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>

        default:
          return <p>{props.children}</p>
      }
    },
    figure (props) {
      return <Figure {...props.node} />
    },
    slideshow (props) {
      return <Slideshow {...props.node} />
    }
  }
}

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent
