import { Carousel, Image } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useGetTopBooksQuery } from "../slices/booksApiSlice" ;
import Loader from "./Loader";
import Message from "./Message";

const BookCarousel = () => {

    const { data: books, isLoading, error } = useGetTopBooksQuery();

  return (
    isLoading ? <Loader /> : error ?
    ( <Message variant='danger'>{error}</Message> ): (
        <Carousel fade pause='hover' className='bg-light mb-4' >
            {books.map(book => (
                <Carousel.Item key={book._id} interval={2000} className='carousel-item'>
                    <Link to={`/book/${book._id}`}>
                        <Image src={book.image} alt={book.title} fluid className='carousel-image'/>
                        <Carousel.Caption className='carousel-caption'>
                            <h3>{book.title} ${book.price}</h3>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
  );
}

export default BookCarousel;