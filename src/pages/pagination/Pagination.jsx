import React from 'react';
import './pagination.css';
import ReactPaginate from 'react-paginate';
import { ArrovStyle, ArrovStyleLeft, Wraper } from './Pagination.styled';
import { useSelector } from 'react-redux';
import { selectNotices, selectTotalPages } from 'redux/notices/selectors';

const Pagination = ({ click, limit, page }) => {
  const totalPages = useSelector(selectTotalPages);
  const pets = useSelector(selectNotices);

  return (
    <>
      {pets.length > 0 && (
        <Wraper>
          <ReactPaginate
            nextLabel={<ArrovStyle />}
            onPageChange={click}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={Math.ceil(totalPages / limit) || 0}
            previousLabel={<ArrovStyleLeft />}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-arr"
            nextClassName="page-item"
            nextLinkClassName="page-arr"
            breakLabel=""
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active-btn"
            renderOnZeroPageCount={null}
            forcePage={page}
          />
        </Wraper>
      )}
    </>
  );
};

export default Pagination;