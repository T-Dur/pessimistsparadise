import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import tdur from './tdur.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={tdur}
          alt={`Tamarah`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p>
          Tamarah Durden.
        </p>
      </div>
    )
  }
}

export default Bio
