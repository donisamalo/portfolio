import React from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import BasePage from '@/components/BasePage';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';

const ROLES = ['Bridestory (Nuxt.js, React.js)', 'Umroh.com (Nuxt.js - Universal(SSR))', 'Aktivaku (Nuxt.js - SPA)', 'Qoala (Nuxt.js - SPA and Universal)'];
const Index = () => {
  return (
    <BaseLayout className="cover">
      <BasePage>
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Frontend Engineer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1.png"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Doni Samalo.
                    Get informed, collaborate and discover projects I was working on through the years!
                  </h1>
                </div>
                <Typed
                  strings={ROLES}
                  typeSpeed={70}
                  backSpeed={70}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|">
                </Typed>
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look on my work.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  )
}

export default Index;
