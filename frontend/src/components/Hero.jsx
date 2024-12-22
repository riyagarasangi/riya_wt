import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            At We Care , we are dedicated to providing comprehensive healthcare
            services with compassion and expertise. Our state-of-the-art facility is designed to
            cater to all your health needs, ensuring you receive the best possible care. Our team
            of skilled professionals is committed to delivering personalized care tailored to each
            patient's unique requirements.
          </p>
          <p>
            At We Care, your well-being is our top priority. We strive to create a harmonious
            journey towards optimal health and wellness, making sure you feel supported every step
            of the way. Trust us to be your partner in health, providing the care and attention you
            deserve.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
