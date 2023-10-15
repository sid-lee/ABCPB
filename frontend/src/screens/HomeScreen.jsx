import { Row, Col } from 'react-bootstrap' ;
import React from 'react';
import Book from '../components/Book';
import { useGetBooksQuery } from '../slices/booksApiSlice';
import Loader from '../components/Loader';

const HomeScreen = () => {

  const { data: books, isLoading, error } = useGetBooksQuery();

  return (
    <>
      { isLoading ? (
          // <h2>Loading...</h2>
          <Loader />
        ) : error ? ( 
          <div>{ error?.data.message || error.error }</div> 
        ) : (
            <>
              <h2>Latest Books</h2>
              <Row>
                  { books.map((book)=> (
                      <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                          <Book book={book} />
                      </Col>
                  )) }
              </Row>
            </>
        ) 
      }  
    </>
  );
};

export default HomeScreen