import React from "react"
import { Copy, Footer, Heading, Hero, Nav, Screen } from "../components"
import { typography } from "../constants/styles"
import { Helmet } from "react-helmet"

const About = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About</title>
      <link rel="canonical" href="https://peoplesmusic.studio/about" />
    </Helmet>
    <style jsx>
      {`
        :global(*) {
          box-sizing: border-box;
          border: none;
          padding: 0;
          margin: 0;
        }
        @font-face {
          font-family: Blacktop;
          font-display: optional;
          src: ${typography.heading.base64} format("woff");
        }
      `}
    </style>
    <Nav />

    <Hero
      src="/media/images/lesson-2.jpg"
      style={{ marginTop: "66px", position: "relative" }}
      scrim
    >
      <Heading inverted size="xl" style={{ textAlign: "center" }}>
        About
      </Heading>
    </Hero>
    <Screen>
      <Copy>
        My name is Joe Fraley. I want to share more than 15 years of experience
        teaching, performing, writing and recording music in pop, jazz, rock,
        blues, and neo soul. I spent years feeling stuck and lost with my own
        music. I wanted music to pour out of me with freedom and joy. Now I’ve
        studied proven methods that have unlocked that joy for me, and I want to
        share those methods with as many people as possible. Music and
        free-expression are a basic human right that everyone deserves to enjoy.
        That's why I always teach from a place of patience, non-judgment, and
        fun!
      </Copy>
    </Screen>

    <Footer style={{ backgroundColor: "white" }} />
  </>
)

export default About
