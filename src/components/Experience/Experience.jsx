import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import ExperienceImg from '../Image/ExperienceImg';
import PortfolioContext from '../../context/context';
// import teslaLogo from '../../images/teslaLogo.jpg'

const Experience = () => {
  const { experience } = useContext(PortfolioContext);

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

  if (experience[0] !== undefined) {
    // figure out why first experience array is undefined...
    return (
      <section id="experience">
        <Container>
          <Title title="Experience" />
          {Object.keys(experience).map((key) => {
            return (
              <Row key={key}>
                <Col md={6} sm={12}>
                  <Fade bottom duration={1000} delay={600} distance="30px">
                    <div className="experience-wrapper__image">
                      <ExperienceImg alt="teslaLogo.jpg" filename={experience[key].img} />
                    </div>
                  </Fade>
                </Col>
                <Col>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="about-wrapper__info">
                      <p className="about-wrapper__info-text">{experience[key].company}</p>
                      <p className="about-wrapper__info-text">{experience[key].title}</p>
                      <p className="about-wrapper__info-text">{experience[key].location}</p>
                      <p className="about-wrapper__info-text">{experience[key].timeframe}</p>
                      <p className="about-wrapper__info-text">{experience[key].description}</p>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </Container>
      </section>
    );
  }

  return <div>Loading</div>;
};

export default Experience;
