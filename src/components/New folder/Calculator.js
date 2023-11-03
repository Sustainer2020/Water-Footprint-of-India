import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CalculatorHeader = () => (
  <div className="h-section h-section-global-spacing d-flex align-items-lg-center align-items-md-center align-items-center style-2506 style-local-836-c2 position-relative">
    <Container className="h-section-grid-container h-section-boxed-container">
      <Row className="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-0 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-3435 style-local-836-c3 position-relative">
        <Col className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-2 gutters-col-md-2 gutters-col-0 gutters-col-v-lg-2 gutters-col-v-md-2 gutters-col-v-2">
          <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-3436-outer style-local-836-c4-outer">
            <div className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-3436 style-local-836-c4 position-relative">
              <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                <div className="page-title style-3437 style-local-836-c5 position-relative h-element">
                  <div className="h-page-title__outer style-3437-outer style-local-836-c5-outer">
                    <div className="h-global-transition-all">
                      <h1 style={{ marginBottom: 0 }}>Extended Water Footprint Calculator</h1>
                    </div>
                  </div>
                </div>
                <div className="h-lead h-text h-text-component style-4094 style-local-836-c6 position-relative h-element">
                  <div>
                    <p>
                      What’s the water footprint of your current lifestyle? Get a more in-depth understanding of your own water footprint!
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

const CalculatorIframe = () => (
  <div className="h-row-container gutters-row-lg-0 gutters-row-md-0 gutters-row-0 gutters-row-v-lg-0 gutters-row-v-md-0 gutters-row-v-0 style-3433 style-local-836-c7 position-relative">
    <Container className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-0 gutters-col-md-0 gutters-col-0 gutters-col-v-lg-0 gutters-col-v-md-0 gutters-col-v-0">
      <Col className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-3434-outer style-local-836-c8-outer">
        <div className="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-3434 style-local-836-c8 position-relative">
          <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
            <div className="style-2510 style-local-836-c9 position-relative h-element">
              <div>
                <iframe
                  style={{ height: '1500px', width: '1000px' }}
                  scrolling="yes"
                  width="1000"
                  height="1500"
                  data-src="https://www.waterfootprint.org/calculator-extended"
                  className="lazyloaded"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Container>
  </div>
);

const CalculatorPage = () => (
  <div>
    <CalculatorHeader />
    <CalculatorIframe />
  </div>
);

export default CalculatorPage;
