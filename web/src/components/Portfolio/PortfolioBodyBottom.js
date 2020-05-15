import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  grid-area: PortfolioBodyBottom;
  margin: 1rem 0;
  padding: 0;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(1, 1fr);
  @media screen and (min-width: 75em) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const PortfolioBodyBottom = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default PortfolioBodyBottom
