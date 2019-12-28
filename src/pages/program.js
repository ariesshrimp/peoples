import React from "react"
import { Copy, Footer, Heading, Nav, Screen } from "../components"
import { typography } from "../constants/styles"
import { Helmet } from "react-helmet"
const Program = () => {
  const offset = 96
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta
          name="description"
          content="Brief summary of my teaching method"
        />
        <meta charSet="utf-8" />
        <title>Program</title>
        <link rel="canonical" href="https://peoplesmusic.studio/program" />
      </Helmet>
      <style jsx>{`
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
      `}</style>
      <Nav />

      <Screen style={{ marginTop: `${offset}px` }}>
        <Heading size="lg" style={{ textAlign: "center" }}>
          Program
        </Heading>
        <Copy raw>
          My program has two pillars, inspired by David Reed’s{" "}
          <a href="https://www.improviseforreal.com">Improvise For Real</a>{" "}
          method. <strong>First</strong>, we want the ability to name{" "}
          <em>any</em>
          sound that occurs in our mind. This can be the sounds we hear while
          listening to or thinking about our favorite songs, or they can be the
          sounds we hear when we are imagining and creating our own original
          music. <strong>Second</strong>, we want to <em>instinctively</em> know
          how to produce those sounds on our instrument. What key do we push?
          Which string do we play? As we master these two skills, we become able
          to instantly play any music we can imagine. We are able to improvise
          music from the top of our head with other musicians. We are able to
          play all of our favorite songs in any key from memory. We are able to
          freely express ourselves through composing original music. All of the
          energy of our musical life can now be devoted to directly to beautiful
          music. This method is equally great for students of any age, any
          experience level with music, and any style of music. It is especially
          excellent for very young students, because it invites them to bring
          their whole musical self in a playful, engaging way that will make
          music a part of their lives forever. For adult students I always focus
          on progressing their specific, personal goals as musicians in
          everything we do together.
        </Copy>
      </Screen>

      <Footer style={{ backgroundColor: "white" }} />
    </>
  )
}

export default Program
