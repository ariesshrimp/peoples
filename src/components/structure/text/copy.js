import React from "react";
import { typography, colors } from "../../constants/styles";

const Copy = ({ text = "", raw = false, inverted, ...props }) => (
  <>
    <style jsx>
      {`
        .copy {
          color: ${inverted
            ? typography.copy.inverted_color
            : typography.copy.main_color};
          font-family: ${typography.copy.font};
          font-size: 1.125rem;
          font-weight: 400;
          font-style: normal;
          line-height: 1.875rem;
          letter-spacing: 0.1px;
          max-width: 65ch;
        }
        .copy:first-letter {
          color: ${typography.copy.alternate_color};
          float: left;
          font-family: ${typography.copy.font};
          font-size: 75px;
          line-height: 1;
          padding-left: 3px;
          padding-right: 8px;
          padding-top: 4px;
          vertical-alignment: middle;
        }
        .copy :global(a) {
          color: ${colors.red};
          transition: all 0.3s;
        }
        .copy :global(a):hover,
        .copy :global(a):active,
        .copy :global(a):focus {
          color: ${colors.red};
        }

        .copy :global(p):not(:first-child) {
          padding-top: 5px;
          text-indent: 5ch;
        }
      `}
    </style>
    {raw ? (
      <div className="copy">{text || props.children}</div>
    ) : (
      <p className="copy" {...props}>
        {text || props.children}
      </p>
    )}
  </>
);

export default Copy;
