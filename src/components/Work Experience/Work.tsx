import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";


export function Work(){
  return(
    <Container id="portfolio">
      <h2>Work Experience</h2>

      <div className="works">

      <ScrollAnimation animateIn="flipInX">
        <div className="work">
          <header>
            <img src="https://image.winudf.com/v2/image1/Y29tLmdldHN0YW5faWNvbl8xNjY2ODA3Mzg5XzA3NQ/icon.png?w=&fakeurl=1" alt=""  width="50"/>
          <div className="work-links">
            
          </div>
          </header>
          <div className="body">
            <h3>StanVerse Technologies (May,2023 - July,2023)</h3>
            <p>Role - Backend Developer, Location-Bangalore,Karnataka,IN</p> <p>Worked with Typescript and NestJS to remove the bugs in the code-base making it clean and standardized.</p>
            
          </div>
          <p>Techstacks - NestJs,Typescript,NodeJs,mySQL,Redis,RabbitMQ</p>
        </div>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="flipInX">
        <div className="work">
          <header>
          <img src="https://media.licdn.com/dms/image/C4D0BAQEpQoYZD1hOUg/company-logo_200_200/0/1673701704494?e=2147483647&v=beta&t=A1TZ6acVC9TfMRDCwcedaf64QL-Wzy0X6djBdQRRp98" alt=""  width="50"/>

          <div className="work-links">
            
          </div>
          </header>
          <div className="body">
            <h3>LCS-Learn Code Solve (June,2022 - June,2023)</h3>
            <p>Role-Lead</p>
            <p>LCS (Learn Code Solve) is the official algorithmic and programming club of the institute which aims at developing coding culture and a competitive spirit among the students to enhance their skills in Data Structure and Algorithms. 
            </p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="work">
          <header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png" alt=""  width="50"/>

          <div className="work-links">
            
          </div>
          </header>
          <div className="body">
            <h3>GeeksforGeeks (April,2021 - April,2022)</h3>
            <p>Role-Campus Mantri, Location-Remote</p>
            <p>Handled the operations management and conducted coding events sponsored by GeeksForGeeks in campus.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      </div>
    </Container>
  );
}