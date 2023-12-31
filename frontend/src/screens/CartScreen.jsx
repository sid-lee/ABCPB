import { Link, useNavigate } from 'react-router-dom' ;
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import CustomQuantityInput from '../components/CustomQuantityInput';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartSlice';

const CartScreen = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const addToCartHandler = (book, qty) => {
        dispatch(addToCart({ ...book, qty }));
      };
    
      const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
      };
    
      const checkoutHandler = () => {
        navigate('/login?redirect=/shipping');
      };

    return (
        <Row>
            <Col md={8}>
                <h2 style={{ marginBottom: '20px' }}>Shopping Cart</h2>
                { cartItems.length === 0 ? (
                    <Message>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ): (
                    <ListGroup variant='flush'>
                        { cartItems.map((item) => (
                            <ListGroup.Item key={item._id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.title} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/book/${item._id}`}>{item.title}</Link>
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={2}>
                                    <CustomQuantityInput value={item.qty} stockQty={item.stockQty}
                                                onChange={(inputQty) => addToCartHandler(item, inputQty)}
                                    />
                                    </Col>
                                    <Col md={2}>
                                        <Button type='button' variant='light'
                                            onClick={() => removeFromCartHandler(item._id)}>
                                            <FaTrash />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                     </ListGroup>
                    )}
                    </Col>
                    <Col md={4}>
                        <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                            <h2>
                                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                                items
                            </h2>
                            $
                            {cartItems
                                .reduce((acc, item) => acc + item.qty * item.price, 0)
                                .toFixed(2)}
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Button type='button' className='btn-block'
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >
                                Proceed To Checkout
                            </Button>
                            </ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Col>
                </Row>
        );
    };

export default CartScreen;