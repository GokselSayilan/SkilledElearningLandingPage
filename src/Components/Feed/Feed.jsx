import React from "react";
import "./feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="feedCards">
          <div className="feedMainCard">
            <h3 className="feedCardMainTitle">
              Check out our most popular courses!
            </h3>
          </div>
          <div className="feedCard">
            <img
              src="assets/icon-animation.svg"
              alt="animationIcon"
              className="feedCardImg"
            />
            <h4 className="feedCardTitle">Animation</h4>
            <p className="feedCardDesc">
              Learn the latest animation techniques to create stunning motion
              design and captivate your audience.
            </p>
            <p className="feedCardLink">Get Started</p>
          </div>
          <div className="feedCard">
            <img
              src="assets/icon-design.svg"
              alt="designIcon"
              className="feedCardImg"
            />
            <h4 className="feedCardTitle">Design</h4>
            <p className="feedCardDesc">
              Create beautiful, usable interfaces to help shape the future of
              how the web looks.
            </p>
            <p className="feedCardLink">Get Started</p>
          </div>
          <div className="feedCard">
            <img
              src="assets/icon-photography.svg"
              alt="photographyIcon"
              className="feedCardImg"
            />
            <h4 className="feedCardTitle">Photography</h4>
            <p className="feedCardDesc">
              Explore critical fundamentals like lighting, composition, and
              focus to capture exceptional photos.
            </p>
            <p className="feedCardLink">Get Started</p>
          </div>
          <div className="feedCard">
            <img
              src="assets/icon-crypto.svg"
              alt="cryptoIcon"
              className="feedCardImg"
            />
            <h4 className="feedCardTitle">Crypto</h4>
            <p className="feedCardDesc">
              All you need to know to get started investing in crypto. Go from
              beginner to advanced with this 54 hour course.
            </p>
            <p className="feedCardLink">Get Started</p>
          </div>
          <div className="feedCard">
            <img
              src="assets/icon-business.svg"
              alt="businessIcon"
              className="feedCardImg"
            />
            <h4 className="feedCardTitle">Business</h4>
            <p className="feedCardDesc">
              A step-by-step playbook to help you start, scale, and sustain your
              business without outside investment.
            </p>
            <p className="feedCardLink">Get Started</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
