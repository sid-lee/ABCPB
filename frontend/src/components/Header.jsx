import { Badge, Navbar, Nav, Container, NavDropdown } from  'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { SiBookstack } from 'react-icons/si';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/usersApiSlice';

const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ logoutApiCall ] = useLogoutMutation();

    const logoutHandler = async() => {
        try {
            await logoutApiCall().unwrap();
            
            // clear localStorage
            dispatch(logout());
            navigate('/login');

        } catch(err){
            console.log(err);
        }
    }

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
                            <Nav.Link>
                                <FaShoppingCart /> Cart
                                {
                                    cartItems.length > 0 && (
                                        <Badge pill bg='success' style={{marginLeft:'5px'}}>
                                            { cartItems.reduce(( a, c ) => a + c.qty, 0)}
                                        </Badge>
                                    )
                                }
                            </Nav.Link>
                        </LinkContainer>

                        { userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <LinkContainer to='/login'>
                            <Nav.Link><FaUser /> Sign In</Nav.Link>
                        </LinkContainer>
                        ) }

                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header