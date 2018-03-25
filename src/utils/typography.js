import Typography from 'typography'
import Moraga from 'typography-theme-moraga'

Moraga.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

delete Moraga.googleFonts

const typography = new Typography(Moraga)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
