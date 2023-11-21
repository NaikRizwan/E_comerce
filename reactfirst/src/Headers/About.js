import React from "react";
import styled from "styled-components";
const About = () => {
  const Wrapper = styled.section`
    .about-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .welcome-section {
      margin-bottom: 30px;
    }

    .what-sets-us-apart,
    .why-choose-us {
      margin-bottom: 40px;
    }

    .feature {
      display: flex;
      align-items: center;

      margin-bottom: 20px;
    }

    .feature span {
      font-size: 1.5em;
      margin-right: 10px;
    }

    .start-your-journey {
      background-color: #f8f8f8;
      padding: 20px;
      border-radius: 10px;
    }
    .home-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      /* height: 90vh; */
    }

    .welcome-section {
      text-align: center;
      margin-bottom: 30px;
    }

    .about-section,
    .features-section {
      margin-bottom: 40px;
    }

    .feature {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }

    .feature span {
      font-size: 1.5em;
      margin-right: 10px;
    }
  `;
  return (
    <Wrapper>
      <div className="about-container">
        <div className="welcome-section">
          <h1 className="animated-heart">Welcome to Our Creative Hub!</h1>
          <br />
          <br />
          <p>Unleash Your Imagination in the World of Web Design</p>
          <p>
            At our Online Code Editor and Templates platform, we invite you to
            embark on a journey of creativity and innovation. Whether you're a
            seasoned developer or just starting, our platform provides a
            user-friendly environment for front-end development, allowing you to
            code, experiment, and explore a myriad of stunning templates.
          </p>
        </div>

        <div className="what-sets-us-apart">
          <h2>What Sets Us Apart</h2>
          <div className="feature">
            <span>🚀</span>
            <p>
              <strong>Cutting-Edge Technology:</strong> Powered by React and
              HTML, our platform embraces the latest technologies to ensure a
              seamless and dynamic coding experience.
            </p>
          </div>
          <div className="feature">
            <span>🎨</span>
            <p>
              <strong>Beautifully Crafted Templates:</strong> Immerse yourself
              in a collection of breathtaking templates that captivate and
              inspire. From sleek business websites to vibrant personal
              portfolios, we have it all.
            </p>
          </div>
          <div className="feature">
            <span>💡</span>
            <p>
              <strong>Code, Learn, Grow:</strong> Our platform is not just about
              coding; it's a place to learn and grow. Whether you're honing your
              skills or unleashing your creativity, we provide the tools and
              resources you need.
            </p>
          </div>
        </div>

        <div className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <div className="feature">
            <span>🌐</span>
            <p>
              <strong>Responsive Design:</strong> Your creations will shine on
              any device. Our templates are designed to be visually stunning and
              fully responsive, ensuring a flawless experience across
              smartphones, tablets, and desktops.
            </p>
          </div>
          <div className="feature">
            <span>🤝</span>
            <p>
              <strong>Community Support:</strong> Join a thriving community of
              developers and designers. Exchange ideas, seek advice, and
              collaborate with like-minded individuals to elevate your projects.
            </p>
          </div>
          <div className="feature">
            <span>🌟</span>
            <p>
              <strong>Unlimited Possibilities:</strong> The only limit is your
              imagination. With our vast library of templates and flexible code
              editor, you have the power to bring your vision to life.
            </p>
          </div>
        </div>

        <div className="start-your-journey">
          <h2>Start Your Journey Today!</h2>
          <p>
            Whether you're launching a new project, enhancing your skills, or
            just exploring the world of web design, our platform is here to
            empower you. Join us in revolutionizing the way websites are built
            and make your mark on the digital landscape.
          </p>
          <p>Let's code, create, and inspire together!</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
