import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            We Care is a dedicated team of healthcare professionals committed to
            providing exceptional medical services with a personal touch. Our mission
            is to ensure every patient receives the highest standard of care, tailored
            to their unique needs. Our approach combines cutting-edge medical technology
            with compassionate, patient-centered care.
          </p>
          <p>
            In 2024, we continue to expand our services and reach, always striving to
            improve the health and well-being of our community. Our team of experts
            works tirelessly to stay at the forefront of medical advancements, ensuring
            that our patients benefit from the latest treatments and therapies.
          </p>
          <p>
            Currently, we are excited to be working on a groundbreaking MERN STACK project
            that aims to revolutionize how we manage patient information and streamline
            our healthcare services. This innovative project will enhance our ability to
            deliver fast, efficient, and accurate care, making a significant impact on the
            lives of our patients.
          </p>
          <p>
            At We Care, we believe in the power of technology to transform healthcare. Our
            new project leverages the capabilities of the MERN STACK to create a robust,
            scalable platform that will support our growing needs and ensure we can continue
            to provide top-notch care for years to come.
          </p>
          <p>
            We are passionate about what we do, and we are constantly inspired by the positive
            outcomes we see in our patients. Our commitment to excellence drives us to
            continuously seek new ways to improve our services and make a difference in the
            world of healthcare.
          </p>
          <p>
            Join us on this exciting journey and experience the difference that a dedicated,
            innovative, and caring team can make. At We Care, your health and well-being are
            our top priorities, and we are here to support you every step of the way.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
