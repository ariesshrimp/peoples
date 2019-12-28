import React from "react"
import { colors, typography } from "../../constants/styles"

const styles = {
  inverted: {
    color: colors.white,
    background: colors.transparent,
    borderColor: colors.white,
    hover: {
      color: colors.white,
      background: "rgba(255, 82, 82, 0.5)",
      borderColor: "rgba(255, 82, 82, 0.5)",
    },
  },
  standard: {
    color: colors.white,
    background: colors.black,
    borderColor: colors.white,
    hover: {
      color: colors.white,
      background: colors.red,
      borderColor: colors.transparent,
    },
  },
}

const Button = ({ text = "", type = "standard", ...props }) => (
  <>
    <style jsx>{`
      button {
        border-color: ${styles[type].borderColor};
        border-radius: 24px;
        border-style: solid;
        border-width: 1px;
        font-family: ${typography.copy.font};
        font-size: 1em;
        padding: 1em;
        text-transform: uppercase;
        transition: background 0.4s, color 0.3s;
      }
      button:hover,
      button:active,
      button:focus {
        background-color: ${styles[type].hover.background} !important;
        border-color: ${styles[type].hover.borderColor} !important;
        border-width: 1px;
        color: ${styles[type].hover.color} !important;
        cursor: pointer;
      }
    `}</style>
    <button
      style={{
        transition: "",
        ...styles[type],
        ...props.style,
      }}
      {...props}
    >
      {text || props.children}
    </button>
  </>
)

export default Button
