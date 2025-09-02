import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import hero from "../assets/3.svg";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              Kevin P.L
              <br />
              <span>Tan</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Operations &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Digital&nbsp;Transformation</div>
              <div className="landing-h2-2">Manager</div>
            </h2>
          </div>
        </div>
        {/* Hero SVG shown in place of old 3-D character */}
        <div className="landing-image">
          <img src={hero} alt="Hero graphic" className="hero-svg" />
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
