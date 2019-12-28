import React from "react"
import { Button } from "../interactive"
import { colors } from "../../constants/styles"

const callToAction = `Schedule a free lesson now!`

const Footer = props => (
  <>
    <style jsx>{`
      footer {
        align-items: center;
        background-color: ${colors.black};
        bottom: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-bottom: 3em;
        padding-left: 4em;
        padding-right: 4em;
        text-align: center;
        width: 100%;
      }
      footer > * {
        padding: 5px;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 0;
        padding: 1em;
      }
      li {
        display: flex;
        padding: 2px 10px;
      }
      address {
        font-size: 16px;
        color: ${colors.white};
      }
      a {
        color: ${colors.white};
        font-family: Roboto, sans-serif;
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.3s all;
      }
      a:active,
      a:hover,
      a:focus {
        color: ${colors.red};
      }
    `}</style>
    <footer style={props.style}>
      <Button
        onClick={event =>
          window ? window.location.assign("/free-trial-lesson") : null
        }
      >
        {callToAction}
      </Button>
    </footer>
  </>
)

export default Footer
