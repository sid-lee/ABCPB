import { useParams } from 'react-router-dom'
import books from '../books'

const BookScreen = () => {

    const { id: bookId } = useParams();
    const book = books.find( (b) => b._id === bookId);
    console.log(book);
    
    return (
    <div>BookScreen</div>
    )
}

export default BookScreen