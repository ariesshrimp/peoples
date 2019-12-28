import React from "react"
import CONSTANTS, { standard_address } from "../../constants"
import { colors } from "../../constants/styles"

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/program", label: "Program" },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {
  const getWindow = () => {
    try {
      return window.location.pathname
    } catch (error) {}
  }
  return (
    <>
      <style jsx>{`
        nav {
          align-items: center;
          background-color: ${colors.black};
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          padding: 10px;
          position: fixed;
          text-align: center;
          top: 0;
          width: 100%;
          z-index: 1;
        }
        nav > * {
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
        :global(address) {
          text-transform: initial;
        }
        a, .link {
          color: ${colors.white};
          font-family: Roboto, sans-serif;
          font-size: 14px;
          text-decoration: none;
          text-transform: uppercase;
          transition: 0.3s all;
        }
        a:active,
        a:hover,
        a:focus,
        a[href="${getWindow()}"] {
          color: ${colors.red};
        }
      `}</style>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <div>
          <a href={`tel:${CONSTANTS.CONTACT.PHONE_NUMBERS.MAIN}`}>
            {CONSTANTS.CONTACT.PHONE_NUMBERS.MAIN}
          </a>
          <br />
          <a
            rel="noopener noreferrer"
            style={{ textTransform: "lowercase" }}
            href={`mailto:${CONSTANTS.CONTACT.EMAILS.MAIN}`}
            target="_blank"
          >
            {CONSTANTS.CONTACT.EMAILS.MAIN}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={CONSTANTS.CONTACT.ADDRESS.MAIN.MAP_LINK}
          >
            <address>{standard_address()}</address>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Nav
