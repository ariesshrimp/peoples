import React from "react"
import CONSTANTS, { standard_address } from "../../constants"

const Header = () => (
  <header>
    <address>{standard_address()}</address>
    <a href={`tel:${CONSTANTS.CONTACT.PHONE_NUMBERS.MAIN}`}>
      {CONSTANTS.CONTACT.PHONE_NUMBERS.MAIN}
    </a>
  </header>
)

export default Header
