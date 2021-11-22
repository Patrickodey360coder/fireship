import React from 'react';
import styled from 'styled-components';
import bg from '../images/bg3.svg'

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background: #14305D;
  color: white;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 760px) {
    flex-direction: column-reverse;
  }
`
const WelcomeText = styled.div`
  h1 {
    font-size: 3em;
  }
  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 2.5em;
    }
  }
  @media only screen and (max-width: 760px) {
    h1 {
      font-size: 2em;
    }
    height: 50%;
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 1.8em;
      font-weight: 900;
      padding: 1em 0;
    }
    align-items: flex-start;
    /* justify-content: center; */
  }
  color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const WelcomeImage = styled.div`
  color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 760px) {
    height: 50%;
    width: 50%;
  }
`

function Hero() {
  return (
    <HeroSection>
      <HeroWrapper className="container" id="hero">
        <WelcomeText>
          <div>
            <h1 className="mb-lg-5 pe-lg-5 py-3">You run your business. We’ll handle your finances.</h1>
            <p className="mb-lg-5 pe-lg-5">From bookkeeping to tax filing, Bench is the all-in-one financial toolkit your business can count on.</p>
            <button className="btn btn-pink btn-lg">Start a Free Trial</button>
          </div>
        </WelcomeText>
        <WelcomeImage>
          <img src={bg} className="img-fluid"  alt="background"/>
        </WelcomeImage>
      </HeroWrapper>
    </HeroSection>
  )
}



export default Hero
