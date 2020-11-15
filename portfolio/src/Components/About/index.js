import React from "react";
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Profile from "../../images/profile.jpg"


const About = () => {
    return (
      <section id="about">
        <Container>
            <Fade bottom duration={1000} delay={300} distance="30px">
                <h2 className="section-title" title="About Me">About Me</h2>
            </Fade>
          <Row className="about-wrapper">
            <Col md={6} sm={12}>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="about-wrapper__image">
                  <img alt="profile" src= {Profile} />
                </div>
              </Fade>
            </Col>
            <Col md={6} sm={12}>
              <Fade left duration={1000} delay={1000} distance="30px">
                <div className="about-wrapper__info">
                    <p className="about-wrapper__info-text">
                        Hi there! I'm a newbie web developer with a passion for finding creative ways of transforming my clients' ideas into beautiful realities.
                    </p>
                    <p className="about-wrapper__info-text">
                        When I'm not coding, I'm either knee-deep into psychology textbooks for graduate school, playing with my pre-schooler, or taking long walks with my giant Great Pyrenees puppy.
                    </p>
                    <p className="about-wrapper__info-text">
                        I hope you enjoy the sample of original work I created in collaboration with my colleagues, displayed in the section below.
                    </p>
                    <span className="d-flex mt-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href='https://drive.google.com/file/d/1vzIs4mpDg5HZNkrkDtLql3cRkQbbfezw/view?usp=sharing'
                      >
                        Resume
                      </a>
                    </span>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  
  export default About;