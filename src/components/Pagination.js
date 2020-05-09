import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, search, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(100 / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const next = () =>{
    console.log("clicked")
  }
  console.log(totalPosts,"totalpost");
  return (
    <nav>
      <ul className='pagination float-right'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='' className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <li>
            <a onClick={next} className='page-link text-primary'>
              >>
            </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;