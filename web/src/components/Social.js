import React from 'react'
import styled from '@emotion/styled'
import Ionicon from 'react-ionicons'

const Wrapper = styled.section`
  margin: 1rem auto 0;
  @media screen and (min-width: 55em) {
    margin: 0;
  }
`
const SocialIcon = styled.div`
  display: inline-block;
  padding: 0 0.5rem;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`

const Social = props => {
  return (
    <Wrapper>
      <SocialIcon>
        <a href="https://github.com/nickeblewis/" alt="github">
          <Ionicon className="icon" fontSize="35px" icon="logo-github" />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href="https://instagram.com/nicklewisphotography/" alt="instagram">
          <Ionicon className="icon" fontSize="35px" icon="logo-instagram" />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href="https://twitter.com/nicklewis" alt="twitter">
          <Ionicon className="icon" fontSize="35px" icon="logo-twitter" />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href="https://www.linkedin.com/in/nicklewis/" alt="linkedin">
          <Ionicon className="icon" fontSize="35px" icon="logo-linkedin" />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href="https://www.facebook.com/nicklewisphotography" alt="facebook">
          <Ionicon className="icon" fontSize="35px" icon="logo-facebook" />
        </a>
      </SocialIcon>
    </Wrapper>
  )
}

export default Social
