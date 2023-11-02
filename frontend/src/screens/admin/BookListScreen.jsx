
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {
    useGetBooksQuery,
    // useDeleteBookMutation,
    useCreateBookMutation
  } from '../../slices/booksApiSlice';
  import { toast } from 'react-toastify';
  

const BookListScreen = () => {

    const { data: books, isLoading, error} = useGetBooksQuery();

    const [ createBook, {isLoading: loadingCreate}] = useCreateBookMutation();

    const deleteHandler = (id) =>  {
        console.log('delete', id);
    };

    const createBookHandler = async() => {

        if (window.confirm('Are you sure you want to create a new book?')) {
            try {
                await createBook();
                // refetch();
            } catch(error){
                toast.error(error?.data?.message || error.error );
            }
            
        }
    };

    return (
    <>
        <Row className='align-items-center'>
            <Col>
                <h2>Books</h2>
            </Col>
            <Col className='text-end'>
                <Button className='btn-sm-3' onClick={createBookHandler}>
                    <FaEdit /> Create Book
                </Button>
            </Col>
        </Row>

        { loadingCreate && <Loader /> }

        { isLoading ? <Loader /> : 
            error ?  <Message variant='danger' >{error}</Message> : (
            <>
                <Table strip hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>AUTHORS</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book)=> (
                            <tr key={book._id}>
                                <td>{book._id}</td>
                                <td>{book.title}</td>
                                <td>$ {book.price}</td>
                                <td>{book.category}</td>
                                <td>{book.authors}</td>
                                <td>
                                    <LinkContainer to={`/admin/book/${book._id}/edit`}>
                                        <Button variant='light' className='btn-sm mx-2'>
                                            <FaEdit />
                                        </Button>
                                    </LinkContainer>
                                    <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(book._id)}>
                                        <FaTrash style={{color: 'white'}}/>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        )}
    </>
  )
}

export default BookListScreen