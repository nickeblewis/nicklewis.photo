import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { format } from 'date-fns'

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
  padding: 0 1rem 0.25rem;
  flex-grow: 1;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
`
const Date = styled.h4`
  padding: 0.25rem 1rem 1rem;
  color: var(--color-base);
  text-align: left;
  text-align: center;
  text-transform: uppercase;
  position: relative;
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

const ArticleHead = props => {
  return (
      <Wrapper>
        <BackButton to="/blog/">
          <h4>⬅ Back</h4>
        </BackButton>
        <Title>{props.title}</Title>
        <Date>
          Published: {format(props.date, 'MMMM Do YYYY')}
        </Date>
        {/*<List>
          {props.tags.map(tag => (
            <Tag key={tag.id}>
              <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
            </Tag>
          ))}
          </List>*/}
      </Wrapper>

  )
}

export default ArticleHead
