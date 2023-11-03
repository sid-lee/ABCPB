import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import {
  useGetBookDetailsQuery,
  useUpdateBookMutation,
  useUploadBookImageMutation,
} from '../../slices/booksApiSlice';

const BookEditScreen = () => {

  const { id: bookId } = useParams();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [selfLink, setSelfLink] = useState('');
  const [authors, setAuthors] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stockQty, setStockQty] = useState(0);
  const [ISBN, setISBN] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [google_id, setGoogle_id] = useState('');
  const [subject, setSubject] = useState('');
  const [rating, setRating] = useState('');
  const [reviewsCount, setReviewsCount] = useState('');

  const {
    data: book,
    isLoading,
    refetch,
    error,
  } = useGetBookDetailsQuery(bookId);

  const [updateBook, { isLoading: loadingUpdate }] =
    useUpdateBookMutation();

  const [uploadBookImage, { isLoading: loadingUpload }] =
    useUploadBookImageMutation();

  const navigate = useNavigate();

  const submitHandler = async (e) => {

    e.preventDefault();
    try {
      await updateBook({
        bookId,
        title,
        price,
        image,
        selfLink,
        authors,
        category,
        description,
        stockQty,
        ISBN,
        publisher,
        publishedDate,
        google_id,
        subject,
        rating,
        reviewsCount
      }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
      toast.success('Book updated');
      refetch();
      navigate('/admin/booklist');

    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setPrice(book.price);
      setImage(book.image);
      setSelfLink(book.selfLink);
      setAuthors(book.authors);
      setCategory(book.category);
      setStockQty(book.stockQty);
      setDescription(book.description);
      setPublisher(book.publisher);
      setPublishedDate(book.publishedDate);
      setISBN(book.ISBN);
      setGoogle_id(book.google_id);
      setSubject(book.subject);
      setReviewsCount(book.reviewsCount);
      setRating(book.rating);
    }
  }, [book]);

  const uploadFileHandler = async (e) => {

    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    try {
      const res = await uploadBookImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);

    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Link to='/admin/booklist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h2>Edit Book</h2>
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error.data.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='title' placeholder='Enter title'
                value={title} onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control type='number' placeholder='Enter price'
                    min="0.00"
                    step="0.01"
                    max="100000.00"
                    presicion={2} 
                value={price} onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control type='text' placeholder='Enter image url' 
                value={image} onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.Control label='Choose File' type='file'
                onChange={uploadFileHandler} 
              ></Form.Control>
              {loadingUpload && <Loader />}
            </Form.Group>

            <Form.Group controlId='selfLink'>
              <Form.Label>SelfLink</Form.Label>
              <Form.Control type='text' placeholder='Enter self-link'
                value={selfLink} onChange={(e) => setSelfLink(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='authors'>
              <Form.Label>Authors</Form.Label>
              <Form.Control type='text' placeholder='Enter authors'
                value={authors} onChange={(e) => setAuthors(e.target.value)}
              ></Form.Control>
            </Form.Group>


            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control type='text' placeholder='Enter category'
                value={category} onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='stockQty'>
              <Form.Label>Stock Qty</Form.Label>
              <Form.Control type='number' placeholder='Enter stockQty'
                  min="0"
                  step="1"
                  max="1000000000"
                value={stockQty} onChange={(e) => setStockQty(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='subject'>
              <Form.Label>Subject</Form.Label>
              <Form.Control type='text' placeholder='Enter subject'
                value={subject} onChange={(e) => setSubject(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control type='text' placeholder='Enter description'
                value={description} onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='publisher'>
              <Form.Label>Publisher</Form.Label>
              <Form.Control type='text' placeholder='Enter Publisher'
                value={publisher} onChange={(e) => setPublisher(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='publishedDate'>
              <Form.Label>Published Date</Form.Label>
              <Form.Control type='date' placeholder='Enter Published Date'
                value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='ISBN'>
              <Form.Label>ISBN</Form.Label>
              <Form.Control type='text' placeholder='Enter ISBN'
                value={ISBN} onChange={(e) => setISBN(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='google_id'>
              <Form.Label>Google ID</Form.Label>
              <Form.Control type='text' placeholder='Enter google_id'
                value={google_id} onChange={(e) => setGoogle_id(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type='submit'
              variant='primary'
              style={{ marginTop: '1rem' }}
            >
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default BookEditScreen;