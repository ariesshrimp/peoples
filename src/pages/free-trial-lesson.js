import React from "react"
import { Copy, Heading, Nav, Screen } from "../components"
import { typography } from "../constants/styles"

import CONSTANTS from "../constants"

const FreeTrial = () => {
  const offset = 96
  return (
    <>
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

      <Screen style={{ marginTop: `${offset}px` }}>
        <Heading size="lg" style={{ textAlign: "center" }}>
          Free Lesson
        </Heading>
        <Copy raw>
          {CONSTANTS.BUSINESS_NAME} is happy to offer a completely free
          30-minute first lesson. We will spend some time discussing your goals,
          listening to some of your favorite music, and some very casual playing
          together. I always treat the free trial exactly as any other lesson,
          so you will leave with concrete things to practice no matter what.
          It’s a great way to check out the studio and have some fun! Call{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`tel:${CONSTANTS.CONTACT.PHONE_NUMBERS.MAIN}`}
          >
            {CONSTANTS.CONTACT.PHONE_NUMBERS.MAIN}
          </a>{" "}
          or send an e-mail to{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`mailto:${CONSTANTS.CONTACT.EMAILS.MAIN}`}
          >
            {CONSTANTS.CONTACT.EMAILS.MAIN}
          </a>{" "}
          now to schedule your free lesson!
        </Copy>
      </Screen>
    </>
  )
}

export default FreeTrial
