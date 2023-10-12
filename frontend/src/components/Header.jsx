import { Navbar, Nav, Container } from  'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { SiBookstack } from 'react-icons/si';
import { LinkContainer } from 'react-router-bootstrap';

import logo from  '../assets/logoYellow.png';

const Header = () => {
    return (
        <header>
            <Navbar className='bg-body-tertiary' bg='light' data-bs-theme='light' expand='md' collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>
                        <div className="logo-container">
                            <div className="logo-icon">
                                <SiBookstack size={64}/>
                            </div>
                            <div className="brand-name">
                                <div className="top-line">
                                    <span className="word1">ABC</span>
                                    <span className="word2">Publishers</span>
                                </div>
                                <div className="bottom-line">Bookstore</div>
                            </div>
                        </div>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <LinkContainer to='/cart'>
                            <Nav.Link><FaShoppingCart /> Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link><FaUser /> Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header