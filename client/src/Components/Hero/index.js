import React from "react";
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

const Header = () => {
     return (
      <section id="hero" className="jumbotron ">
        <div className="overlay">
         <Container>
          <Fade  left duration={1000} delay={500} distance="30px">
            <h1 className="react-reveal hero-title">
              Hi, my name is
              <span className="text-color-main"> Andreia Chapman.</span>
              <br />
                I'm an Atlanta area web developer.
            </h1>
          </Fade>
          <Fade left duration={1000} delay={1000} distance="30px">
            <p className="hero-cta" id="herobtn">
              <span className="cta-btn cta-btn--hero" >
                <Link to="about" smooth duration={1000}>
                  Know more
                </Link>
              </span>
            </p>
          </Fade>
         </Container>
       </div>
      </section>
      
    );
  };
  
  export default Header;
       