import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { Routes } from 'react-router';
import People from './components/People';
import CreateUser from './components/CreateUser'

const CardComponent = ({ person, handleLike, handleDislike }) => (
  <Card style={{ width: '17rem', height: 'auto' }}>
    <Card.Img variant="top" src={person.image} />
    <Card.Body>
      <Card.Title>{person.name}</Card.Title>
      <Card.Text>
        <p>Age: {person.age}</p>
        <p>Sign: {person.sign}</p>
        <p>{person.bio}</p>
      </Card.Text>
    </Card.Body>

    <Card.Footer>
      <Button variant="primary" onClick={() => handleLike(person)}>
        Like
      </Button>
      <Button variant="danger" onClick={() => handleDislike(person)}>
        Dislike
      </Button>
    </Card.Footer>
  </Card>
);

const LikedCardComponent = ({ person }) => (
  <div>
    <CardComponent person={person} />
  </div>
);

const App = () => {
  const [cards, setCards] = useState(People);
  const [likedCards, setLikedCards] = useState([]);
  const [showLiked, setShowLiked] = useState(false);
  const [filterSign, setFilterSign] = useState('');
  const [likedFilterSign, setLikedFilterSign] = useState('');

  const handleLike = (person) => {
    const newLikedCards = [...likedCards, person];
    const newCards = cards.filter((card) => card!== person);
    setLikedCards(newLikedCards);
    setCards(newCards);
  };

  const handleDislike = (person) => {
    const newLikedCards = likedCards.filter((card) => card!== person);
    setLikedCards(newLikedCards);
  };

  const handleShowLiked = () => {
    setShowLiked(!showLiked);
  };

  const handleReset = () => {
    setCards(People);
    setLikedCards([]);
    setShowLiked(false);
  };

  const handleFilterSign = (sign) => {
    setFilterSign(sign);
  };

  const handleLikedFilterSign = (sign) => {
    setLikedFilterSign(sign);
  };
  const handleCreateUser = (newUser) => {
    // Update the People array with the new user
    setCards([...cards, newUser]);
  };

  const filteredCards = showLiked? likedCards : cards;
  const allCards = filterSign ? filteredCards.filter((card) => card.sign === filterSign) : filteredCards;
  const likedAllCards = showLiked ? (likedFilterSign ? filteredCards.filter((card) => card.sign === likedFilterSign) : filteredCards) : [];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateUser handleCreateUser={handleCreateUser} />} />
        <Route path="/dating" element={
          <div className="App">
            <Row className="mb-4">
              <Col md={6}>
              <Link to="/create" className="btn btn-primary mr-2">
                Create User
              </Link>
                <Link to="/dating/liked" className="btn btn-success mr-2" onClick={handleShowLiked}>
                  Show Liked
                </Link>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary">
                    Filter</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleFilterSign('')}>Show All</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterSign('Aquarius')}>Aquarius</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterSign('Pisces')}>Pisces</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterSign('Aries')}>Aries</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterSign('Taurus')}>Taurus</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterSign('Gemini')}>Gemini</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterSign('Cancer')}>Cancer</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterSign('Leo')}>Leo</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterSign('Virgo')}>Virgo</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterSign('Libra')}>Libra</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterSign('Scorpio')}>Scorpio</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterSign('Sagittarius')}>Sagittarius</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterSign('Capricorn')}>Capricorn</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md={6}>
                {/* ... other filters and buttons here */}
              </Col>
            </Row>
            <Row>
              {allCards.map((person, index) => (
                <Col md={4} key={index}>
                  {showLiked ? (
                    <LikedCardComponent person={person} />
                  ) : (
                    <CardComponent person={person} handleLike={handleLike} handleDislike={handleDislike} />
                  )}
                </Col>
              ))}
            </Row>
          </div>
        } />
        <Route path="/dating/liked" element={
          <div className="App">
            <Row className="mb-4">
              <Col md={6}>
                <Link to="/dating" className="btn btn-success mr-2" onClick={handleShowLiked}>
                  Show All
                </Link>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary">
                    Filter
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('')}>Show All</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('Aquarius')}>Aquarius</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('Pisces')}>Pisces</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('Aries')}>Aries</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('Taurus')}>Taurus</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('Gemini')}>Gemini</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('Cancer')}>Cancer</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('Leo')}>Leo</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('Virgo')}>Virgo</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('Libra')}>Libra</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('Scorpio')}>Scorpio</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('Sagittarius')}>Sagittarius</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLikedFilterSign('Capricorn')}>Capricorn</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md={6}>
                {/* ... other filters and buttons here */}
              </Col>
            </Row>
            <Row>
              {likedAllCards.map((person, index) => (
                <Col md={4} key={index}>
                  <LikedCardComponent person={person} />
                </Col>
              ))}
            </Row>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;