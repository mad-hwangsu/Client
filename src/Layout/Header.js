import React from 'react';
import { Navbar,  Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header className = 'mint'>
            <Navbar  bg="light" expand="lg" >
                <Container fluid className="d-flex">
                    <div className="d-flex justify-content-start w-50">
                        <Navbar.Brand>Code Helper</Navbar.Brand>
                    </div>
                    <div className="d-flex justify-content-end w-50">
                        <Nav className="ml-auto">
                          <div className='mint'></div>
                          <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                          </LinkContainer>
                          <LinkContainer to="/wrong">
                            <Nav.Link>Wrong List</Nav.Link>
                          </LinkContainer>
                          <LinkContainer to="/rank">
                            <Nav.Link>Ranking</Nav.Link>
                          </LinkContainer>
                          <LinkContainer to="/profile">
                            <Nav.Link>Profile</Nav.Link>
                          </LinkContainer>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
