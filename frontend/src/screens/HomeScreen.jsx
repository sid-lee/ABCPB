import { Row, Col } from 'react-bootstrap' ;
import { useEffect, useState } from 'react' ;
// import books from '../books';
import React from 'react';
import Book from '../components/Book';
import axios from 'axios';

const HomeScreen = () => {

  const [ books, setBooks ] = useState([]) ;

  useEffect( () => {
    const fetchBooks = async () => {
      const { data } = await axios.get('/api/books');
      setBooks(data);
    };

    fetchBooks();
   }, []);

  return (
    <>
        <h2>Latest Books</h2>
        <Row>
            { books.map((book)=> (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Book book={book} />
                </Col>
             )) }
        </Row>
    </>
  )
}

export default HomeScreen