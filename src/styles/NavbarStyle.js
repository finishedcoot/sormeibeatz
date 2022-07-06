import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
`

export const LogoContaier = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img.logo {
    border-radius: 50%;
    width: 75px;
    z-index: 5;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    width: 25px;
    height: 25px;
    margin: 0.5rem 0.5rem;
  }
  .socialMedia {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 769px) {
    img.logo {
      border-radius: 50%;
      width: 55px;
      z-index: 5;
    }
    a {
      width: 20px;
      height: 20px;
    }
  }
`
