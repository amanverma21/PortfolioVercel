import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import lcsLogo from "../../assets/lcs.jpeg";
export function Work() {
  return (
    <Container id="portfolio">
      <h2>Work Experience</h2>

      <div className="works">
        {/* Software Developer at Stanverse Technologies */}
        <ScrollAnimation animateIn="flipInX">
          <div className="work">
            <header>
              <img
                src="https://image.winudf.com/v2/image1/Y29tLmdldHN0YW5faWNvbl8xNjY2ODA3Mzg5XzA3NQ/icon.png?w=&fakeurl=1"
                alt=""
                width="50"
              />
              <div className="work-links"></div>
            </header>
            <div className="body">
              <h3>Stanverse Technologies Pvt. Ltd. (Jan 2024 – Present)</h3>
              <p>
                Role - Software Developer, Location - Bangalore
              </p>
              <p>
                Currently working on iOS and Android mobile applications,
                developing different features. Implemented features allowing
                admin to log in, create, and manage tournaments held over the
                application regularly. Involved in development of an Admin Panel
                to manage various platform features like creation of store
                coupons.
              </p>
              <p>
                Tech Stacks - React Native, Objective-C, ReactJs, Typescript, Redux, Firebase
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Backend Developer at Stanverse Technologies */}
        <ScrollAnimation animateIn="flipInX">
          <div className="work">
            <header>
              <img
                src="https://image.winudf.com/v2/image1/Y29tLmdldHN0YW5faWNvbl8xNjY2ODA3Mzg5XzA3NQ/icon.png?w=&fakeurl=1"
                alt=""
                width="50"
              />
              <div className="work-links"></div>
            </header>
            <div className="body">
              <h3>Stanverse Technologies Pvt. Ltd. (May 2023 – July 2023)</h3>
              <p>
                Role - Backend Developer, Location - Bangalore
              </p>
              <p>
                Contributed to the development of GameRep.gg by leading
                initiatives to centralize gaming statistics display, streamline
                profile sharing, and expedite access to exclusive tournaments.
                Developed features to streamline distribution of redeem codes
                using CSV, with the retrieval of redeem codes using Redis.
                Identified and resolved software bugs, improved codebase
                organization, and conducted refactoring activities to enhance
                code quality and maintainability.
              </p>
              <p>
                Tech Stacks - NestJS, TypeScript, MySQL, MongoDB, TypeORM, Rest
                API
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* LCS-Learn Code Solve */}
        <ScrollAnimation animateIn="flipInX">
          <div className="work">
            <header>
              <img
                src={lcsLogo}
                alt=""
                width="50"
              />
              <div className="work-links"></div>
            </header>
            <div className="body">
              <h3>LCS-Learn Code Solve (June 2022 – June 2023)</h3>
              <p>Role - Lead</p>
              <p>
                LCS (Learn Code Solve) is the official algorithmic and
                programming club of the institute which aims at developing
                coding culture and a competitive spirit among the students to
                enhance their skills in Data Structures and Algorithms.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
