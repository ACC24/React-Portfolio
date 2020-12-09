import React from "react";
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Project1 from "../../images/project1.jpg";
import Project2 from "../../images/project2.jpg";
import Project3 from "../../images/house1.jpg"

const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Fade bottom duration={1000} delay={300} distance="0px">
            <h2 className="section-title">Projects</h2>
          </Fade>
          <Row >
            <Col lg={4} sm={12}>
              <Fade
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Pandemic Effects on News Landscape</h3>
                  <div>
                    <p>
                      This application allows the user to search for a keyword and compare the news landscape before and during the pandemic. It will answer a question such as "How the headline words have changed in news articles pre and post the COVID-19 outbreak?”
                        </p>
                    <p className="mb-4">
                      <span className="text-color-main">Technologies used: </span>
                          HTML, CSS, Javascript/ES6, JQuery, Materialize, Moment.js, The NewYork Times and The Guardian API's.
                        </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                    href="https://cotec4.github.io/Pandemic-Effects/"
                  >
                    See Live
                      </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main"
                    href="https://github.com/ACC24/Pandemic-Effects"
                  >
                    Source Code
                      </a>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a
                    href="https://cotec4.github.io/Pandemic-Effects/"
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <img alt="Project1" src={Project1} />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
          <Row >
            <Col lg={4} sm={12}>
              <Fade
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Our Same Kitchen</h3>
                  <div>
                    <p>
                    The Our Same Kitchen App is a web and mobile application allowing food establishments (e.g. restaurants, grocery stores, farms) with food surplus to easily notify organizations in need and schedule a pick up date time.                                                       
                        </p>
                    <p className="mb-4">
                      <span className="text-color-main">Technologies used: </span>
                      HTML, CSS, Javascript/ES6, Nodejs, Express-Handlebars, Calendly, Passport, and Sequelize.
                        </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                    href="https://the-united-rhinos.herokuapp.com/"
                  >
                    See Live
                      </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main"
                    href="https://github.com/hngdngng/Our-Same-Kitchen"
                  >
                    Source Code
                      </a>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a
                    href="https://the-united-rhinos.herokuapp.com/"
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <img alt="Project2" src={Project2} />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
          <Row >
            <Col lg={4} sm={12}>
              <Fade
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Murder at the Manor</h3>
                  <div>
                    <p>
                    This application is a murder mystery game built with React. The user is invited to solve a murder case by entering the Bank's mansion and finding clues in each room. When the user is confident of the killer identity he/she can guess the killer and end the game.  
                        </p>
                    <p className="mb-4">
                      <span className="text-color-main">Technologies used: </span>
                      HTML, CSS, Javascript/ES6, Nodejs, React, Redux, React-redux, Adobe Photoshop, , Mongobd, Mongoose, Passport, Reactstrap, React-image-mapper, .jwt-decode.
                        </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                    href="https://murder-at-the-manor.herokuapp.com/"
                  >
                    See Live
                      </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main"
                    href="https://github.com/ACC24/Murder-Mystery-Game"
                  >
                    Source Code
                      </a>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a
                    href="https://murder-at-the-manor.herokuapp.com/"
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <img alt="Project3" src={Project3} />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;


