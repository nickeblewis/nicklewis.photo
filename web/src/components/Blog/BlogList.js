import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { format } from 'date-fns'
import { getFluidGatsbyImage, getFixedGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'
import PortableText from '../block-content/portableText'

const ProjectLink = styled(Link)`
  text-decoration: none;
  padding: 0;
  margin: 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    transition: all 0.5s;
    display: inline-block;
    &:hover div {
      @supports (object-fit: cover) {
        opacity: 1;
        visibility: visible;
      }
    }
    &:hover h1 {
      color: var(--color-highlight) !important;
    }
  }
`
const Cover = styled.div`
  div {
    background: var(--color-base);
    height: 100% !important;
    width: 100%;
    object-fit: cover !important;
    display: block;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    position: fixed !important;
    pointer-events: none;
    transition: opacity 0.3s, visibility 0.3s;
    width: calc(50% - 3rem);
    height: calc(100vh - 5.5rem);
    top: 3.5rem;
    left: 2rem;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    div {
      height: 100% !important;
      object-fit: cover !important;
    }
  }
`
const Title = styled.h2`
  text-transform: uppercase;
  margin: 0;
  padding: 1rem 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0;
  }
`
const Date = styled.h4`
  margin: 0;
  text-transform: none;
  padding: 0.25rem 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0.25rem 0;
  }
`
const Excerpt = styled.p`
  margin: 0;
  font-weight: normal;
  text-transform: none;
  padding: 0.25rem 2rem 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0.25rem 0 0;
  }
`
const BlogList = props => {
  const fluidProps = getFluidGatsbyImage(
    props.image.asset._id,
    { maxWidth: 675 },
    ...clientConfig.sanity
  )
  const dateSegment = format(props.date, 'YYYY/MM')
  console.log(props)
  return (
    <ProjectLink key={props.id} to={`/blog/${dateSegment}/${props.slug}/`}>
      <Cover>
        <Img fluid={fluidProps} />
      </Cover>
      <Title>{props.title}</Title>
      <Date>
        Published: {format(props.date, 'MMMM Do YYYY')} | Reading time: {props.time} min
      </Date>
      <Excerpt>
        <PortableText blocks={props.excerpt}/>
      </Excerpt>
    </ProjectLink>
  )
}

export default BlogList

