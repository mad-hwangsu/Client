import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const UserRankingCard = ({ name, score, profileImageUrl }) => {
  return (
    <Card className="mb-3">
      <Row className="no-gutters">
        <Col xs={4} md={4} className="d-flex">
          <Card.Img variant="top" src={profileImageUrl} style={{ objectFit: 'cover', width: '90%', height: '90%', paddingLeft: '20px',paddingTop:'10px'}} />
        </Col>
        <Col xs={8} md={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Score: {score}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default UserRankingCard;
