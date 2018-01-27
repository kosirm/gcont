import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"

class IndexPage extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: rhythm(2) }}>
        <h2>Gatsby's integration with the Contentful Image API</h2>
        <Link to="/image-api/">See examples</Link>
        <br />
        <br />
        <br />
        <h2>Localization</h2>
        <p>
          The <code>gatsby-source-contentful</code> plugin offers full support
          for Contentful's localization features. Our sample space includes
          products localized into both English and German.
        </p>
        <p>
          An entry and asset node are created for each locale following fallback
          rules for missing localization. In addition, each node has an
          additional field added, <code>node_locale</code> so you can select for
          nodes from a single locale
        </p>
      </div>
    )
  }
}

export default IndexPage
