import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import Helmet from 'react-helmet'
import '../styles/reset'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Wrapper from '../components/Wrapper'
import Menu from '../components/Menu'
import { injectGlobal } from 'emotion'

injectGlobal`
:root {
--color-base: #E6E3E1 ;
--color-secondary: #100B00 ;
--color-tertiary: #223843 ;
--color-highlight: #FE5F55 ;
--color-accent: #FBF2F0 ;
}
@media (prefers-color-scheme: dark) {
:root {
--color-base: #100B00;
--color-secondary: #E6E3E1;
--color-tertiary: #F4DAD3;
--color-highlight: #FE5F55;
--color-accent: #FCFCFC; 
 }
}

body {
  background: var(--color-base);
  color: var(--color-secondary);
}
h1,h2,h3,h4,h5,h6,a,strong {
  color: var(--color-secondary);
}
p {
  color: var(--color-secondary);
}
a{
  transition: all 0.5s;
  color: var(--color-secondary);
  &:hover {
  color: var(--color-highlight);
  }
}
svg {
  transition: all 0.5s;
  fill: var(--color-tertiary);
  &:hover {
    fill: var(--color-highlight);
  }
}
.bm-overlay, .bm-menu-wrap {
  background: var(--color-base);
}
.bm-cross {
  background: var(--color-tertiary);
}
.bm-burger-bars {
  background: var(--color-tertiary);
}
`

const Layout = ({ children, location }) => {
  return (
    <div className="siteRoot">
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: config.siteDescription }]}
        title={config.siteTitle}
        link={[{
          href:"https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
          rel:"stylesheet",
          type:"text/css" 
        }]}
        script={[{ 
          type: 'text/javascript', 
          url:"",
          id: "snipcart",
          "data-api-key": "NzIzOTg5MjktMzA3NC00ODk0LWE5N2ItNTNjMDA1YzI3OWQ3NjM2MzY3MDEyNTg3MjIyMTA3",
          src:"https://cdn.snipcart.com/scripts/2.0/snipcart.js" 
        },{
          type: 'text/javascript',
          src:"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
        }]} 
      />
     
      <ThemeProvider theme={theme}>
        <Wrapper>
          <div id="outer-container">
            <Menu />
            <div className="siteContent" id="page-wrap">
              {children}
            </div>
          </div>
        </Wrapper>
      </ThemeProvider>
    </div>
  )
}

export default Layout
