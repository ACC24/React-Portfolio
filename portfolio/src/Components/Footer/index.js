import React from "react";
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
      <footer className="footer navbar-static-bottom">
        <Container>
          <span className="back-to-top">
            <Link to="hero" smooth duration={1000}>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </Link>
          </span>
          <div className="social-links">
          <a href="https://www.linkedin.com/in/andreia-chapman-9564071a/" rel="noopener noreferrer" target="_blank" aria-label="linkedin"><i class="fa fa-linkedin fa-inverse"></i></a>
          <a href="https://github.com/ACC24" rel="noopener noreferrer" target="_blank" aria-label="github"><i class="fa fa-github fa-inverse"></i></a>
            </div>
          <hr />
          <p className="footer__text">
          © {new Date().getFullYear()}  Andreia Chapman
        </p>
        </Container>
      </footer>
    );
  };
  
  export default Footer;