import { Container } from "./styles";

import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import profileImage from "../../assets/profile.png";
import mongoIcon from "../../assets/mongo.jpg";
import nestIcon from "../../assets/nest.png";
// import reactNativeIcon from "../../assets/react-native-icon.svg";
// import reduxIcon from "../../assets/redux-icon.svg";
import objectiveCIcon from "../../assets/objc-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            A passionate Software Developer currently working at Stanverse Technologies Pvt. Ltd., with experience in mobile and backend development.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I have knowledge of various front-end and back-end technologies, frameworks, databases, and best coding practices. I'm always improving with every project I take on.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            I am a dedicated, hardworking, and results-oriented individual, always striving to achieve the best version of myself.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.8 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={reactNativeIcon} alt="React Native" />
            </ScrollAnimation>
          </div> */}

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={typescriptIcon} alt="TypeScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={nodeIcon} alt="Node.js" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={nestIcon} alt="NestJS" />
            </ScrollAnimation>
          </div>

          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={reduxIcon} alt="Redux" />
            </ScrollAnimation>
          </div> */}

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
              <img src={mongoIcon} alt="MongoDB" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.9 * 1000}>
              <img src={htmlIcon} alt="HTML" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.0 * 1000}>
              <img src={cssIcon} alt="CSS" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.1 * 1000}>
              <img src={objectiveCIcon} alt="Objective-C" />
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="Profile" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
