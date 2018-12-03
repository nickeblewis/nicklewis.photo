import Typography from 'typography'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const typography = new Typography({
  title: 'Montserrat + Source Code',
  baseFontSize: '16px',
  baseLineHeight: 1.618,
  scaleRatio: 5 / 2,
  googleFonts: [
    {
      name: 'Patua One',
      styles: ['900', '900i'],
    },
    {
      name: 'Merriweather Sans',
      styles: ['400', '900'],
    },
    {
      name: 'Merriweather',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Merriweather Sans', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'Helvetica', 'sans-serif'],

  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 900,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    blockquote: {
      ...scale(1 / 5),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    'pre[class*="language-"],code[class*="language-"]': {
      fontFamily: ['IBM Plex Mono', 'monospace'].join(','),
    },
    ul: {
      listStyle: 'disc',
    },
    'ul,ol': {
      marginLeft: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      fontFamily: ['Montserrat', 'Helvetica', 'serif'].join(','),
      fontWeight: options.headerWeight,
    },
    h4: {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase',
    },
    h6: {
      fontStyle: 'italic',
    },
    a: {
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      boxShadow: 'none',
    },
    'mark,ins': {
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none',
    },
  }),
})

const { rhythm, scale } = typography

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export { rhythm, scale, typography as default }
