import React from "react"
import { Container, LogoContaier } from "../styles/NavbarStyle.js"
import logo from "../images/omid1.png"
import instagram from "../images/insta.svg"
import soundcloud from "../images/sound.svg"
import youtube from "../images/youtube.svg"

const Navbar = () => {
  return (
    <Container>
      <LogoContaier>
        <img className="logo" src={logo} alt="omid-hashemi" />
        <div>
          <a href="/">
            <img className="socialMedia" src={instagram} alt="omido" />
          </a>
          <a href="https://soundcloud.com/omid-hashemi-334715499">
            <img className="socialMedia" src={soundcloud} alt="Omid Hashemi" />
          </a>
          <a href="https://www.youtube.com/channel/UCIrXr40sEmzTIj0JIBcpsMw">
            <img className="socialMedia" src={youtube} alt="Omid Hashemi" />
          </a>
        </div>
      </LogoContaier>
    </Container>
  )
}

export default Navbar
