import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

import React from 'react'

const Book = ({ book }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/book/${book._id}`}>
                <Card.Img src={book.image} variant="top" />
            </Link>

            <Card.Body>
                <Link to={`/book/${book._id}`}>
                    <Card.Title as='div' className='book-title'>
                        <strong>{book.title}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>text={`${book.numReviews} reviews`}
                    <Rating value={ book.rating } text={` ${book.reviewsCount} reviews`} />
                </Card.Text>
                <Card.Text as='h3'>
                    $ {book.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Book;