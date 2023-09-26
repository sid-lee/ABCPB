import { Navbar, Nav, Container } from  'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from  '../assets/logoYellow.png';

const Header = () => {
    return (
        <header>
            <Navbar className="bg-body-tertiary" bg="light" data-bs-theme="light" expand="md" collapseOnSelect>
            <Container>
                    <Navbar.Brand href="/"><img
                        alt=""
                        src={logo}
                        width="150"
                        height="75"
                        className="d-inline-block align-top"
                        />{' '}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
                            <Nav.Link href="/login"><FaUser /> Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header