import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
          {Array.from({ length: pages }, (_, index) => index + 1).map((pageNumber) => (
          <LinkContainer
            key={pageNumber}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${pageNumber}`
                  : `/page/${pageNumber}`
                : `/admin/booklist/${pageNumber}`
            }
          >
            <Pagination.Item active={pageNumber === page}>{pageNumber}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;