import { useState } from 'react' ;
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';


const SearchBox = () => {

  const navigate = useNavigate();
  const { keyword:urlKeyword } = useParams();
  const [ keyword, setKeyword ] = useState( urlKeyword || '');

  const submitHandler = (e) => {

    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control type='text' name='q' className='mr-sm-2 ml-sm-5'
        value={keyword} placeholder='titles, authors, subjects, descriptions ...'
        onChange={(e) => setKeyword(e.target.value)} 
      >
      </Form.Control>
      <Button type='submit' variant='outline-secondary' className='p-2 mx-2' >Search</Button>
    </Form>
  )
}

export default SearchBox;