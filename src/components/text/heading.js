import React from "react";
import { typography } from "../../constants/styles";

const sizes = {
  sm: "1em",
  md: "2em",
  lg: "4em",
  xl: "7em"
};

const Heading = ({ text, inverted, size, ...props }) => (
  <>
    <style jsx>
      {`
        h1 {
          padding: 30px;
        }
      `}
    </style>
    <h1
      style={{
        color: inverted
          ? typography.heading.inverted_color
          : typography.heading.main_color,
        fontFamily: typography.heading.font,
        fontSize: sizes[size],
        ...props.style
      }}
    >
      {text || props.children}
    </h1>
  </>
);

export default Heading;
