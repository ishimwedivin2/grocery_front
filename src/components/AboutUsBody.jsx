import React from "react";
import "../styles/AboutUsBody.css";

const AboutUsBody = () => {
  return (
    <div>
      <section id="about-us">
        <div className="about-container">
          <h2>About Us</h2>
          <p className="vision">
            Our mission is to provide top-quality products while striving to reduce our environmental impact. We believe in innovation, sustainability, and commitment to creating a better future for the planet.
          </p>
          <div className="team-section">
            <h3>Meet Our Team</h3>
            <div className="team-members">
              <div className="team-member">
                <h4>Ashimwe Cedrick</h4>
                <p>CEO & Founder</p>
                <p>
                  Cedrick is the visionary behind our company, with a passion for sustainable business practices and innovation.
                </p>
              </div>
              <div className="team-member">
                <h4>Igabamahoro Jehovanis</h4>
                <p>Chief Product Officer</p>
                <p>
                  Jehovanis leads the product development team, ensuring every product meets the highest standards of quality.
                </p>
              </div>
              <div className="team-member">
                <h4>Bucyukundi Jonathan</h4>
                <p>Head of Sustainability</p>
                <p>
                  Jonathan is committed to environmental sustainability, making sure our processes are eco-friendly and impactful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsBody;
