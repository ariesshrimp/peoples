import React from "react";

const Hero = ({
  className = "",
  src = "",
  scrim = false,
  children,
  ...props
}) => (
  <>
    <style jsx>
      {`
        .hero {
          align-items: center;
          background-attachment: scroll;
          background-image: url(${src});
          background-position: center center;
          background-position: center;
          background-repeat: no-repeat;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          flex-flow: column;
          justify-content: center;
          min-height: 100vh;
          overflow: hidden;
          width: 100vw;
        }
        .scrim {
          align-items: center;
          background-attachment: fixed;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          flex-flow: column;
          flex-grow: 1;
          justify-content: center;
          min-height: 100%;
          min-width: 100%;
        }
      `}
    </style>
    <div className={`hero ${className}`} {...props}>
      {scrim ? <div className="scrim">{children}</div> : children}
    </div>
  </>
);

export default Hero;
