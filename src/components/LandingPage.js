import React from 'react';
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container>
      <Navbar />
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8}>
          <h1>Welcome to AstroMatch</h1>
          <p>
            Find your perfect match based on astrology. Our dating site uses the power of the stars to help you find compatible partners. Sign up now to start browsing profiles and connecting with like-minded individuals.
          </p>
          <Link to="/dating">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;