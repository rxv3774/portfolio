import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import ExperienceImg from '../Image/ExperienceImg';
import PortfolioContext from '../../context/context';
// import teslaLogo from '../../images/teslaLogo.jpg'

const Experience = () => {
  const { experience } = useContext(PortfolioContext);
  const { img, company, title, location, timeframe, description } = experience;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  console.log(company);
  return (
    <section id="experience">
      <Container>
        <Title title="Experience" />
        <Row>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="experience-wrapper__image">
                <ExperienceImg alt="teslaLogo.jpg" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{company || 'Tesla'}</p>
                <p className="about-wrapper__info-text">{title || 'Software Engineer Intern'}</p>
                <p className="about-wrapper__info-text">{location || 'Remote'}</p>
                <p className="about-wrapper__info-text">{timeframe || 'January 2021 - Present'}</p>
                <p className="about-wrapper__info-text">
                  {description || 'Worked on full stack features.'}
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <ExperienceImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{company || 'Transcat'}</p>
                <p className="about-wrapper__info-text">{title || 'Software Engineer Intern'}</p>
                <p className="about-wrapper__info-text">{location || 'Rochester, New York'}</p>
                <p className="about-wrapper__info-text">{timeframe || 'May 2019 - January 2020'}</p>
                <p className="about-wrapper__info-text">
                  {description || 'Worked on full stack features.'}
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
