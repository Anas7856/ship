import React from "react";
import "./PlatformworksSection.css";

const rightImage = "/ser1.jpg";

const iconBaseStyle = {
  background: "#3215c4ff", // dark blue
  borderRadius: "50%",
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 24,
  color: "#fff",
  marginRight: 16,
};

const PlatformworksSection = () => (
  <section className="services" id="services">
    <div className="container">
      <div className="section-title text-center">
        <p className="subtitle ">The best Broker company</p>
        <h2>How our platform works</h2>
        <div className="decorative-line center"></div>
        <p className="section-description">
          At Valhalla Logistic LLC, we specialize in the transportation, storage,
          and distribution of goods with unmatched efficiency.
        </p>
      </div>

      <div className="platform-info">
        <div className="platform-content">
          <div className="service-list">
            {/* Dedicated Loads */}
            <div className="service-item fade-in-left">
              <div className="service-icon" style={iconBaseStyle}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="13" height="8" rx="2" fill="#fff" />
                  <rect x="15" y="10" width="5" height="5" rx="1" fill="#fff" />
                  <circle cx="7" cy="18" r="2" fill="#fff" />
                  <circle cx="18" cy="18" r="2" fill="#fff" />
                </svg>
              </div>
              <div className="service-content">
                <h4>Dedicated Loads</h4>
                <p>
                  We offer reliable trucking services for dedicated lanes and
                  routes. Our commitment to timely deliveries ensures your supply
                  chain runs smoothly.
                </p>
              </div>
            </div>

            {/* Amazon Loads */}
            <div className="service-item fade-in-left">
              <div className="service-icon" style={iconBaseStyle}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <ellipse cx="12" cy="12" rx="10" ry="10" fill="#fff" />
                  <path
                    d="M7 15c2 1.5 8 1.5 10 0"
                    stroke="#3215c4ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 10c.5-1 2.5-1 3 0"
                    stroke="#3215c4ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="service-content">
                <h4>Amazon Loads</h4>
                <p>
                  We specialize in efficient Amazon load handling for on-time
                  deliveries. Our expertise ensures your Amazon shipments meet
                  strict delivery requirements.
                </p>
              </div>
            </div>

            {/* Government Contracts */}
            <div className="service-item fade-in-left">
              <div className="service-icon" style={iconBaseStyle}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="6" y="10" width="12" height="8" rx="2" fill="#fff" />
                  <rect x="10" y="6" width="4" height="4" rx="1" fill="#fff" />
                  <rect x="8" y="14" width="8" height="2" rx="1" fill="#3215c4ff" />
                </svg>
              </div>
              <div className="service-content">
                <h4>Government Contracts</h4>
                <p>
                  As a trusted Broker, we provide secure logistics for government
                  contracts. Our experience ensures compliance with all
                  regulations and deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="platform-image fade-in-right">
          <img src={rightImage} alt="Logistics Platform" />
          <div className="image-badge safety-badge">
            <i className="fas fa-shield-alt"></i>
            <span>Safety in your truck</span>
          </div>
          <div className="image-badge protection-badge">
            <i className="fas fa-clock"></i>
            <span>24 hour protection</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PlatformworksSection;
