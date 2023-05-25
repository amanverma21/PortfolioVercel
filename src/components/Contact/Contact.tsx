import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import LinkedInIcon from "../../assets/linkedin.png"

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:averma2k19@gmail.com">averma2k19@gmail.com</a>
        </div>
        <div>
          <img src={LinkedInIcon} alt="Email" />
          <a href="https://www.linkedin.com/in/amanvermain/">amanvermain</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+91 96257 63259">+91 96257 63259</a>
        </div>  
      </div>
    </Container>
  )
}