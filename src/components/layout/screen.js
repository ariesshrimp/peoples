import React from "react";

const Screen = ({ className = "", ...props }) => (
  <>
    <style jsx>
      {`
        .screen {
          align-items: center;
          display: flex;
          flex-flow: column;
          justify-content: space-evenly;
          min-height: 100vh;
          max-width: 100vw;
          padding: 4em;
        }
      `}
    </style>
    <div className={`screen ${className}`} {...props}></div>
  </>
);

export default Screen;
