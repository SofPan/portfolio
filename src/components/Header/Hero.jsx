import React from "react";

const Hero = () => {
  return(
    <div className="hero">
      <h1>
        My name is <span className="color-alt">Sofia</span><br />
        I am a <span className="color-alt">Full-stack Developer</span>
      </h1>
      <div>
        <button>My Work</button>
        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default Hero;