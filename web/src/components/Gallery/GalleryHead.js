import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

const Wrapper = styled.section`
  background: var(--color-secondary);
  opacity: 0.95;
  backdrop-filter: blur(50px);
  top: 3.5rem;
  margin: 3.5rem auto 0;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const BackButton = styled(Link)`
  margin: 1rem 0 0.5rem;
  flex-grow: 1;
  width: 100%;
  align-self: center;
  justify-self: center;
  text-align: center;
  text-decoration: none;
  h4 {
    color: var(--color-base) !important;
  }
  @media screen and (min-width: 75em) {
    position: fixed;
    left: 2rem;
    align-self: flex-start;
    justify-self: flex-start;
    text-align: left;
  }
`
const Title = styled.h2`
  color: var(--color-base);
  padding: 0 1rem 1rem;
  flex-grow: 1;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
`
const List = styled.ul`
  text-transform: capitalize;
  font-weight: 600;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  text-align: center;
  display: block;
  position: relative;
`

const Tag = styled.li`
  display: inline-block;
  margin: 1rem 0.25rem;
  a {
    transition: 0.2s;
    background: var(--color-base);
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-transform: capitalize;
    margin: 0.5rem;
    text-decoration: none;
    color: var(--color-tertiary);
    &:last-child {
      margin: 0.5rem;
    }
    &:hover {
      background: var(--color-highlight);
    }
  }
`

const GalleryHead = props => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>

    </Wrapper>

  )
}

export default GalleryHead
