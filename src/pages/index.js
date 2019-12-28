import React from "react"
import { Button, Copy, Footer, Heading, Hero, Nav, Screen } from "../components"
import CONSTANTS from "../constants"
import { colors } from "../constants/styles"
import { typography } from "../constants/styles"
import { Helmet } from "react-helmet"
import image from "../images/lesson-2.jpg"
const callToAction = `Schedule a free lesson now!`

const Home = () => (
  <>
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta name="description" content="Welcome to People's Music Studio" />
      <meta charSet="utf-8" />
      <title>People's Music</title>
      <link rel="canonical" href="https://peoplesmusic.studio/" />
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
        :global(body) {
          background: ${colors.black};
        }
        .heading-container {
          display: flex;
          justify-content: space-evenly;
          flex-flow: column;
          align-items: center;
          flex-grow: 1;
          position: relative;
        }
      `}
    </style>
    <Nav />

    <Hero
      src={image}
      style={{ marginTop: "66px", filter: "grayscale(100%)" }}
      scrim
    >
      <div className="heading-container">
        <Heading
          inverted
          size="xl"
          style={{ textAlign: "center", color: colors.white }}
        >
          {CONSTANTS.BUSINESS_NAME}
        </Heading>
        <Button
          type="inverted"
          onClick={event => window.location.assign("/free-trial-lesson")}
        >
          {callToAction}
        </Button>
      </div>
    </Hero>

    <Screen>
      <Copy raw inverted>
        {CONSTANTS.BUSINESS_NAME} uses modern methods to teach students guitar
        and keyboard, and all the fundamentals of music. My goal is to foster
        well-rounded, complete musicians at any age. I focus on giving students
        the keys to their <em>own</em> life-long musical journey. I want all of
        my students to become their own teachers! I do this in two ways. First,
        I focus on making music that students find exciting and fulfilling.
        Second, I teach the simple fundamentals of music underpinning{" "}
        <em>any</em>
        genre or style. Students at ${CONSTANTS.BUSINESS_NAME} work to achieve
        their own musical goals, from performing to creative expression. These
        are the deepest, most powerful approaches to learning any instrument.
        Access to and the creation of music is every person's basic right.
      </Copy>
    </Screen>

    <Footer />
  </>
)

export default Home
