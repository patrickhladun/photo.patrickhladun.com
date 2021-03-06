import * as React from "react"
import Header from '../components/Header';
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>

      <Header />

      <h1 style={headingStyles}>Patrick Hladun Photography</h1>
    </main>
  )
}

export default IndexPage
