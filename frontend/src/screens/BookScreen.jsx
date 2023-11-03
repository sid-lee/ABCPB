import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap' ;
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import CustomQuantityInput from '../components/CustomQuantityInput';
import { useGetBookDetailsQuery, useCreateReviewMutation } from '../slices/booksApiSlice';
import { addToCart } from '../slices/cartSlice';

const BookScreen = () => {

    const { id: bookId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ qty, setQty ] = useState(1);
    const [ rating, setRating ] = useState(0);
    const [comment, setComment] = useState('');

    const  { userInfo } = useSelector((state) => state.auth) ;
    const { data: book, isLoading, error, refetch } = useGetBookDetailsQuery( bookId );
    const [ createReview, { isLoading: loadingBookReview } ] = useCreateReviewMutation();

    const addToCartHandler = () => {
        dispatch(addToCart({ ...book, qty }));
        navigate('/cart');
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await createReview({
                bookId,
                rating,
                comment,
        }).unwrap();
        refetch();
        toast.success('Review created successfully');
        
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };

    return ( 
        <>
            <Link className='btn btn-light my-3' to='/'>Go Back</Link>

            { isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{ error?.data.message || error.error }</Message> 
            ) : (
                <>
                <Row>
                    <Col md={5}><Image src={book.image} alt={book.title} fluid /></Col>
                    <Col md={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item><h3>{book.title}</h3></ListGroup.Item>
                            <ListGroup.Item><Rating value={book.rating} text={`${book.reviewsCount} reviews`} /></ListGroup.Item>
                            <ListGroup.Item>Price: $ {book.price}</ListGroup.Item>
                            <ListGroup.Item>Description: {book.description}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col><strong>$ {book.price}</strong></Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col><strong> {book.stockQty > 0 ? 'In Stock' : 'Out of Stock' } </strong></Col>
                                    </Row>
                                </ListGroup.Item>

                                { book.stockQty > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>

                                            <CustomQuantityInput value={qty} stockQty={book.stockQty}
                                                    onChange={(inputQty) => setQty(inputQty)}
                                            />
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button className='btn-block' type='button' 
                                        disabled={book.stockQty === 0} onClick={addToCartHandler}
                                    >
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
                
                <Row className='review'>
                    <Col md={6}>
                        <h2>Reviews</h2>
                        {book.reviews.length === 0 && <Message>No Reviews</Message>}
                        <ListGroup variant='flush'>
                            {book.reviews.map((review) => (
                            <ListGroup.Item key={review._id}>
                                <strong>{review.name}</strong>
                                <Rating value={review.rating} />
                                <p>{review.createdAt.substring(0, 10)}</p>
                                <p>{review.comment}</p>
                            </ListGroup.Item>
                            ))}
                            <ListGroup.Item>
                                <h2>Write a Customer Review</h2>

                                {loadingBookReview && <Loader />}

                                {userInfo ? (
                                    <Form onSubmit={submitHandler}>
                                    <Form.Group className='my-2' controlId='rating'>
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control as='select' required 
                                            value={rating} onChange={(e) => setRating(e.target.value)}
                                        >
                                        <option value=''>Select...</option>
                                        <option value='1'>1 - Poor</option>
                                        <option value='2'>2 - Fair</option>
                                        <option value='3'>3 - Good</option>
                                        <option value='4'>4 - Very Good</option>
                                        <option value='5'>5 - Excellent</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group className='my-2' controlId='comment'>
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control as='textarea' row='3' required
                                            value={comment} onChange={(e) => setComment(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <Button disabled={loadingBookReview} type='submit' variant='primary'
                                    >
                                        Submit
                                    </Button>
                                    </Form>
                                ) : (
                                    <Message>
                                    Please <Link to='/login'>sign in</Link> to write a review
                                    </Message>
                                )}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </>
            ) }
        </>
    )
};

export default BookScreen;