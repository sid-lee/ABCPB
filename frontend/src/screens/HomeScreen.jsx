import { Row, Col } from 'react-bootstrap' ;
import { useParams } from 'react-router-dom';
import { useGetBooksQuery } from '../slices/booksApiSlice';
import Book from '../components/Book';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';

const HomeScreen = () => {

  const { pageNumber } = useParams();
  const { data, isLoading, error } = useGetBooksQuery({
    pageNumber,
  });

  return (
    <>
    {isLoading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>
        {error?.data?.message || error.error}
      </Message>
    ) : (
      <>
        <h2>Latest Books</h2>
        <Row>
          {data.books.map((book) => (
            <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
              <Book book={book} />
            </Col>
          ))}
        </Row>
        <Paginate pages={data.pages} page={data.page} />
      </>
    )}
    </>
  );
};

export default HomeScreen